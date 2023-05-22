import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { Button, DefaultLayout, Form, Input } from '@/components';
import { NextPageWithLayout } from '@/types/common';
import { useOnEnterCallback } from '@/hooks';

const Login: NextPageWithLayout = () => {
  const supabase = useSupabaseClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const user = useUser();

  const { push } = useRouter();

  const [password, setPassword] = useState('');

  const resetPassword = useCallback(async () => {
    if (password && password.length > 5) {
      setLoading(true);

      try {
        const { error: updateError, data } = await supabase.auth.updateUser({ password });

        if (updateError) {
          throw new Error(updateError.message);
        }

        if (data) {
          setSuccess('Password successfully reset');
          setError('');
          setLoading(false);
          setTimeout(() => {
            push('/game/rules');
          }, 500);
        }
      } catch (e) {
        setError(`${e}`);
        setLoading(false);
      }
    } else {
      setError('Password must be at least 6 characters');
    }
  }, [setLoading, setError, password, supabase.auth, push]);

  useOnEnterCallback(resetPassword);

  if (!user) {
    return <Button text="Log In" as="a" href="/auth/login" />;
  }

  return (
    <DefaultLayout>
      <Form title="Update your password" error={error} success={success}>
        <Input name="password" label="Password" type="password" onChange={(val) => setPassword(val)} />
        <Button text="Submit" loading={loading} onClick={() => resetPassword()} />
      </Form>
    </DefaultLayout>
  );
};

export default Login;
