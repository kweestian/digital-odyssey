import useSWR from 'swr';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useGlobalState } from '@/contexts/global';

const useDownloadFile = (path?: string | null) => {
  const supabase = useSupabaseClient();
  const { dispatch } = useGlobalState();

  const swrResult = useSWR(
    () => (path ? '/user/attachments' : null),
    async () => supabase.storage.from('kering').download(path || ''),
    // download: true,
  );

  if (swrResult.error) {
    dispatch({ type: 'SET_ERROR', payload: swrResult.error });
  }

  return swrResult;
};

export default useDownloadFile;
