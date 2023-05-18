import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSession } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';

import { DefaultLayout, Input, Button, Loader } from '@/components';
import { NextPageWithLayout } from '@/types/common';
import { MagicLinkRequestBody, ServerResponse } from '@/types/server';

import styles from './Login.module.scss';

const Login: NextPageWithLayout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [email, setEmail] = useState('');

  const session = useSession();
  const { push } = useRouter();

  // supabase.auth.onAuthStateChange(async (evt) => {
  //   if (evt === 'SIGNED_IN') {
  //     console.log(session?.user.created_at);
  //     push('/auth/update-password');
  //   }
  // });

  useEffect(() => {
    if (session) {
      // if (session)
      push('/game/rules');
    }
  }, [session, push]);

  const sendMagicLink = useCallback(async () => {
    if (email) {
      setLoading(true);

      try {
        const body: MagicLinkRequestBody = { email };
        const res = await fetch('/api/sendMagicLink', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });

        const data: ServerResponse = await res.json();

        if (data) {
          setLoading(false);
          if (data.error) {
            throw new Error(data.error);
          }

          setSuccess(data?.message || 'Magic Link sent, check your input and follwo the link! ');
          setError('');
        }
      } catch (e) {
        const errorObj = e as { error: string; message: string };
        setError(errorObj.message || errorObj.error);
        setLoading(false);
      }
    } else {
      setError('Email is required');
    }
  }, [setLoading, setError, email, setSuccess]);

  if (!session) {
    return (
      <DefaultLayout>
        <div className={styles.form__group}>
          <h4>Receive a magic link using your work email</h4>
          <div className={styles.message__container}>
            {error && <span className={styles.error}>{error}</span>}
            {success && <span className={styles.success}>{success}</span>}
          </div>
          <Input name="email" label="Email" type="input" onChange={(val) => setEmail(val)} />
          <Button text="Submit" loading={loading} onClick={() => sendMagicLink()} />
          <Link href="/auth/login/email">Already signed up ? Sign In</Link>
        </div>
      </DefaultLayout>
    );
  }
  return <Loader />;
};

export default Login;
