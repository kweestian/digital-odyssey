import { Button, DefaultLayout, Form, Input } from '@/components';
import { NextPageWithLayout } from '@/types/common';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useCallback, useState } from 'react';

const Login: NextPageWithLayout = () => {
  const supabase = useSupabaseClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [email, setEmail] = useState('');

  const sendPasswordLink = useCallback(async () => {
    if (email) {
      setLoading(true);

      try {
        const { error: updateError, data } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window && window.location.origin}/auth/update-password`,
        });

        if (updateError) {
          throw new Error(updateError.message);
        }

        if (data) {
          setSuccess('Check your mailbox for a reset link');
          setError('');
          setLoading(false);
        }
      } catch (e) {
        setError(`${e}`);
        setLoading(false);
      }
    } else {
      setError('Email is required');
    }
  }, [setLoading, setError, email, supabase.auth]);

  return (
    <DefaultLayout>
      <Form title="Enter the email you signed up with" error={error} success={success}>
        <Input name="email" label="Email" type="email" onChange={(val) => setEmail(val)} />
        <Button text="Submit" loading={loading} onClick={() => sendPasswordLink()} />
      </Form>
    </DefaultLayout>
  );
};

export default Login;
