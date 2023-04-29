import React from 'react';
import Image from 'next/image';
import { useUser } from '@supabase/auth-helpers-react';
import classNames from 'classnames';

import Trans from 'next-translate/Trans';
import styles from './DescriptiveCard.module.scss';
// import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
// import { GetServerSideProps } from 'next';

interface DescriptiveCardProps {
  isSmall?: boolean;
  title: string;
  descriptionKey: string;
  icon: typeof import('*.svg');
}

const DescriptiveCard = ({ isSmall, title, descriptionKey, icon }: DescriptiveCardProps) => (
  <div className={classNames(styles.container, { [styles.small]: isSmall })}>
    <div className={classNames(styles.cornerDecoration, styles.topLeftCorner)} />
    <div className={classNames(styles.cornerDecoration, styles.topRightCorner)} />
    <div className={classNames(styles.cornerDecoration, styles.bottomRightCorner)} />
    <div className={classNames(styles.cornerDecoration, styles.bottomLeftCorner)} />

    <div className={styles.content}>
      <h1>{title}</h1>
      <p>
        <Trans i18nKey={descriptionKey} components={{ br: <br /> }} />
      </p>
      <Image src={icon} alt={title} />
    </div>
  </div>
);

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   // Create authenticated Supabase Client
//   const supabase = createServerSupabaseClient(ctx);
//   // Check if we have a session
//   const {
//     data: { session },
//   } = await supabase.auth.getSession();

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }

//   // Retrieve provider_token & logged in user's third-party id from metadata
//   const { user } = session;

//   return { props: { user } };
// };

export default DescriptiveCard;
