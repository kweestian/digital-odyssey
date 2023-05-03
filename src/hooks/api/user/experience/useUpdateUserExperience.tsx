import useSWRMutation from 'swr/mutation';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useGlobalState } from '@/contexts/global';

type UserExperienceColumns = {
  experience_key?: string;
  answer?: Answer[];
  attachment?: string;
  bonus?: string;
  user_id?: string;
};

const useGetUserExperience = () => {
  const supabase = useSupabaseClient();
  const { dispatch } = useGlobalState();

  const updateUserExperience = async (_url: string, { arg }: { arg: UserExperienceColumns }) =>
    supabase.from('user_experiences').upsert([{ ...arg }], { onConflict: 'experience_key' });

  const mutation = useSWRMutation('/user/experiences', updateUserExperience);

  if (mutation.error) {
    dispatch({ type: 'SET_ERROR', payload: mutation.error });
  }

  return mutation;
};

export default useGetUserExperience;
