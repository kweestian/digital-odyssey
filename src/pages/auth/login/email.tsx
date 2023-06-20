import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSessionContext, useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';

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

  return (
    <DefaultLayout>
      <div className={styles.form__container}>
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
        <div className={styles.legal__paragraph}>
          In the context of this serious game, Kering S.A. (acting as controller) will process personal data about you,
          in particular screenshots you provide to unlock the various stages of the game. Your personal data will be
          processed for the following purposes only: (i) enabling you to login and participate in the serious game; (ii)
          identifying the winner(s) of the game and granting a reward; (iii) enabling you to post your completion
          certificate on internal social media (provided you proactively decide to do so); (iv) managing troubleshooting
          and maintenance; (v) following up participation in the game; (vi) ensuring compliance with legal and
          regulatory obligations; and (vii) managing potential or actual litigation.
          <div style={{ marginTop: 10 }} /> Please note that you benefit from certain rights, subject to local privacy
          laws, such as the right to request access to, rectification and erasure of your personal data, or to restrict
          or object to processing, as well as the right to data portability.
          <div style={{ marginTop: 10 }} /> If you want to know more about the processing of your personal data and your
          rights, please read our Privacy Policy available{' '}
          <a href="https://www.keringfoundation.org/en/privacy-policy/" target="_blank" rel="noreferrer">
            here.
          </a>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Login;
