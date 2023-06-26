import { AuthInput, Button, DefaultLayout, Form } from '@/components';
import { useOnEnterCallback } from '@/hooks';
import { NextPageWithLayout } from '@/types/common';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useCallback, useState } from 'react';

import styles from './login/Login.module.scss';

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

  useOnEnterCallback(sendPasswordLink);

  return (
    <DefaultLayout>
      <div className={styles.form__container}>
        <Form title="Enter the email you signed up with">
          <div className={styles.formInputCOntainer}>
            <AuthInput name="email" label="Email" type="email" onChange={(val) => setEmail(val)} />
            <div className={styles.message__container}>
              {error && <span className={styles.errorSignIn}>{error}</span>}
              {success && <span className={styles.successSignin}>{success}</span>}
            </div>
          </div>
          <div className={styles.submitButtonRow}>
            <Button text="Submit" skin="submit" loading={loading} onClick={() => sendPasswordLink()} />
          </div>
        </Form>
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
