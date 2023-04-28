import { useCallback, useState } from 'react';
import Link from 'next/link';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';

import { DefaultLayout, Input, Button } from '@/components';
import { NextPageWithLayout } from '@/types/common';

import styles from './Login.module.scss';

const Login: NextPageWithLayout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const supabase = useSupabaseClient();
  const { push } = useRouter();

  supabase.auth.onAuthStateChange((evt) => {
    if (evt === 'SIGNED_IN') {
      push('/auth/update-password');
    }
  });

  const signInWithEmail = useCallback(async () => {
    if (email && password) {
      setLoading(true);
      try {
        const { data, error: signInError } = await supabase.auth.signInWithPassword({ password, email });

        if (signInError) {
          throw new Error(signInError.message);
        }

        if (data) {
          push('/game/rules');
          setSuccess('');
          setError('');
          setLoading(false);
        }
      } catch (e) {
        const errorObj = e as { error: string; message: string };
        setError(errorObj.message || errorObj.error);
        setLoading(false);
      }
    } else {
      if (!email && password) {
        setError('Email is required');
        return;
      }
      if (!password && email) {
        setError('Password is required');
        return;
      }
      setError('Email and password are required');
    }
  }, [setLoading, setError, setSuccess, email, password, push, supabase.auth]);

  return (
    <DefaultLayout>
      <div className={styles.form__group}>
        <h4>Sign in using your email and password</h4>
        <div className={styles.message__container}>
          {error && <span className={styles.error}>{error}</span>}
          {success && <span className={styles.success}>{success}</span>}
        </div>
        <Input name="email" label="Email" type="input" onChange={(val) => setEmail(val)} />
        <Input name="password" label="Password" type="password" onChange={(val) => setPassword(val)} />

        <Button text="Submit" loading={loading} onClick={() => signInWithEmail()} />
        <Link href="/auth/login">Use magic link instead</Link>
        <Link href="/auth/reset-password">Forgot password ?</Link>
      </div>
    </DefaultLayout>
  );
};

export default Login;
