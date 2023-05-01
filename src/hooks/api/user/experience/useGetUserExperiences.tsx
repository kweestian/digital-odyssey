import useSWR, { Fetcher } from 'swr';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useGlobalState } from '@/contexts/global';

const useGetUserExperience = () => {
  const supabase = useSupabaseClient();
  const { dispatch } = useGlobalState();

  const handler: Fetcher<
    { data: Database['public']['Tables']['user_experiences']['Row'][] | null },
    string
  > = async () => supabase.from('user_experiences').select('*');
  const swrResult = useSWR('/user/experiences', handler);

  if (swrResult.error) {
    dispatch({ type: 'SET_ERROR', payload: swrResult.error });
  }

  return swrResult;
};

export default useGetUserExperience;
