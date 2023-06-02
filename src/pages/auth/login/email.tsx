import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSession, useSessionContext, useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { useOnEnterCallback } from '@/hooks';

import { DefaultLayout, Button, AuthInput } from '@/components';
import { NextPageWithLayout } from '@/types/common';

import * as KeringImaginationLab from '@/../public/static/image/kering-imagination-lab-white.png';

import Image from 'next/image';
import styles from './Login.module.scss';

const Login: NextPageWithLayout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const supabase = useSupabaseClient();
  const session = useSessionContext();
  const user = useUser();
  const { push } = useRouter();

  useEffect(() => {
    if (session && user) {
      // if (session)
      // push('/game/rules');
    }
  }, [session, push, user]);

  const signInWithEmail = useCallback(
    async (signInEmail: string, signInPassword: string) => {
      if (signInEmail && signInPassword) {
        setLoading(true);
        setError('');
        try {
          const { data, error: signInError } = await supabase.auth.signInWithPassword({
            password: signInPassword,
            email: signInEmail,
          });

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
        if (!signInEmail && signInPassword) {
          setError('Email is required');
          return;
        }
        if (!signInPassword && signInEmail) {
          setError('Password is required');
          return;
        }
        setError('Email and password are required');
      }
    },
    [setLoading, setError, setSuccess, push, supabase.auth],
  );

  useOnEnterCallback(() => console.log(email, password));

  return (
    <DefaultLayout>
      <div className={styles.form__group}>
        <Image className={styles.logoImage} src={KeringImaginationLab} alt="Kering Imagination Lab Logo" />
        <h4 className={styles.signInTitle}>SIGN IN USING YOUR EMAIL AND PASSWORD</h4>

        <div className={styles.form__inputs}>
          <div className={styles.form__emailInput}>
            <AuthInput name="email" label="Email" type="input" onChange={(val) => setEmail(val)} />
          </div>
          <div className={styles.form__emailInput}>
            <AuthInput name="password" label="Password" type="password" onChange={(val) => setPassword(val)} />
            <div className={styles.message__container}>
              {error && <span className={styles.errorSignIn}>{error}</span>}
              {success && <span className={styles.successSignIn}>{success}</span>}
            </div>
          </div>

          <Button text="Submit" skin="submit" loading={loading} onClick={() => signInWithEmail(email, password)} />
          <Link href="/auth/login">Use magic link instead</Link>
          <Link href="/auth/reset-password">Forgot password ?</Link>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Login;
