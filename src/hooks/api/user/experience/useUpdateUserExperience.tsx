import useSWRMutation from 'swr/mutation';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useGlobalState } from '@/contexts/global';
import useUserExperience from './useUserExperience';

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

  const { mutate: mutateUserExperience } = useUserExperience();

  const updateUserExperience = async (_url: string, { arg }: { arg: UserExperienceColumns }) => {
    const answer = await supabase
      .from('user_experiences')
      .upsert([{ ...arg }], { onConflict: 'experience_key, user_id' });
    return answer;
  };

  const mutation = useSWRMutation('/user/experiences', updateUserExperience, {
    onSuccess: () => {
      mutateUserExperience();
    },
  });

  if (mutation.error) {
    dispatch({ type: 'SET_ERROR', payload: mutation.error });
  }

  return mutation;
};

export default useGetUserExperience;
