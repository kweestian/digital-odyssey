import useSWR, { Fetcher } from 'swr';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { calculateUserProgress } from '@/utils/calculateUserProgress';

export type LeaderboardPlayer = {
  userId: string;
  displayName: string;
  region: 'Asia Pacific' | 'Europe & Middle East' | 'Americas';
  owlsCollected: number; // 0-6 grey owls
  hasGoldenOwl: boolean;
  totalOwls: number; // 0-7 including golden
  progressPercent: number;
};

type LeaderboardViewRow = {
  user_id: string;
  display_name: string | null;
  region: string | null;
  experience_key: string | null;
  answer: unknown;
  bonus: string | null;
};

type FetcherResult = { data: LeaderboardPlayer[] };

const useLeaderboardData = () => {
  const supabase = useSupabaseClient<Database>();

  const handler: Fetcher<FetcherResult, string> = async () => {
    const { data, error } = await supabase.from('leaderboard_view').select('*');

    if (error) throw error;

    const rows = (data ?? []) as LeaderboardViewRow[];

    const byUser = rows.reduce<Record<string, LeaderboardViewRow[]>>((acc, row) => {
      if (!acc[row.user_id]) acc[row.user_id] = [];
      acc[row.user_id].push(row);
      return acc;
    }, {});

    const leaderboardData: LeaderboardPlayer[] = Object.entries(byUser)
      .map(([userId, userRows]) => {
        const { display_name: displayName, region } = userRows[0];

        const userExperiences = userRows
          .filter((r) => r.experience_key)
          .map((r) => ({
            experienceKey: r.experience_key,
            answer: r.answer,
            bonus: r.bonus,
            attachment: null,
          }));

        const { owlsCollected, hasGoldenOwl, totalOwls, progressPercent } = calculateUserProgress(userExperiences);

        return {
          userId,
          displayName: displayName ?? '(no name)',
          region: (region ?? '(no region)') as LeaderboardPlayer['region'],
          owlsCollected,
          hasGoldenOwl,
          totalOwls,
          progressPercent,
        };
      })
      .sort((a, b) => b.totalOwls - a.totalOwls || b.progressPercent - a.progressPercent);

    return { data: leaderboardData };
  };

  const { data, isLoading, error } = useSWR('/leaderboard', handler);

  return {
    players: data?.data ?? [],
    isLoading,
    error,
  };
};

export default useLeaderboardData;
