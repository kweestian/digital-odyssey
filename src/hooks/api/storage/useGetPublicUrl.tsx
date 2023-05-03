import useSWR from 'swr';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useGlobalState } from '@/contexts/global';

const useGetUserExperience = (path?: string | null) => {
  const supabase = useSupabaseClient();
  const { dispatch } = useGlobalState();

  const swrResult = useSWR(
    () => (path ? '/user/attachments' : null),
    async () =>
      supabase.storage.from('kering').createSignedUrl(path || '', 6000, {
        download: true,
        transform: {
          quality: 100,
        },
      }),
  );

  if (swrResult.error) {
    dispatch({ type: 'SET_ERROR', payload: swrResult.error });
  }

  return swrResult;
};

export default useGetUserExperience;
