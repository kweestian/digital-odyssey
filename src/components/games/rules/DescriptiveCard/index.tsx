import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { useAtom } from 'jotai';
import { popinAtom } from '@/contexts/atom';

import Trans from 'next-translate/Trans';
import styles from './DescriptiveCard.module.scss';
// import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
// import { GetServerSideProps } from 'next';

interface DescriptiveCardProps {
  isCentered?: boolean;
  title: string;
  descriptionKey: string;
  hasIconAction?: boolean;
  icon: string;
}

const DescriptiveCard = ({ isCentered, title, descriptionKey, icon, hasIconAction }: DescriptiveCardProps) => {
  const [, setIsPopupOpen] = useAtom(popinAtom);
  return (
    <div className={classNames(styles.container, { [styles.centered]: isCentered, [styles.notCentered]: !isCentered })}>
      <div className={classNames(styles.cornerDecoration, styles.topLeftCorner)} />
      <div className={classNames(styles.cornerDecoration, styles.topRightCorner)} />
      <div className={classNames(styles.cornerDecoration, styles.bottomRightCorner)} />
      <div className={classNames(styles.cornerDecoration, styles.bottomLeftCorner)} />

      <div className={styles.content}>
        <h1>{title.toUpperCase()}</h1>
        <p>
          <Trans i18nKey={descriptionKey} components={{ br: <br /> }} />
        </p>
        {hasIconAction ? (
          <Image
            style={{ cursor: 'pointer' }}
            width={150}
            height={81}
            src={icon}
            alt={title}
            onClick={() => setIsPopupOpen(true)}
          />
        ) : (
          <Image src={icon} alt={title} width={150} height={81} />
        )}
      </div>
    </div>
  );
};

export default DescriptiveCard;
