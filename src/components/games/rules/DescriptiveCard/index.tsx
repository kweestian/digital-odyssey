import React, { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import * as CloseIcon from '@/image/CloseIcon.svg';

import Trans from 'next-translate/Trans';
import PopupVideo from '@/components/common/PopupVIdeo/PopupVideo';
import styles from './DescriptiveCard.module.scss';
// import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
// import { GetServerSideProps } from 'next';

interface DescriptiveCardProps {
  isCentered?: boolean;
  title: string;
  descriptionKey: string;
  hasIconAction?: boolean;
  icon: typeof import('*.svg') | typeof import('*.gif');
}

const DescriptiveCard = ({ isCentered, title, descriptionKey, icon, hasIconAction }: DescriptiveCardProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsPopupOpen(false);
  };
  const videoUrl = 'https://www.youtube.com/embed/Y82uQpMUCCc';

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
        {isPopupOpen && <PopupVideo videoUrl={videoUrl} onClick={handleClick} closeIcon={CloseIcon} />}
        {hasIconAction ? (
          <Image src={icon} alt={title} onClick={() => setIsPopupOpen(true)} />
        ) : (
          <Image src={icon} alt={title} />
        )}
      </div>
    </div>
  );
};

export default DescriptiveCard;
