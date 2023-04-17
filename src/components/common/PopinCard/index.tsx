import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import * as CloseIcon from '@/image/CloseIcon.svg';

import styles from './PopinCard.module.scss';

interface PopinCardProps {
  children: React.ReactNode;
  onClick: () => void;
}

const PopinCard = ({ children, onClick }: PopinCardProps) => {
  const test = 'test';

  return (
    <div className={styles.container}>
      <div className={styles.popinContainer}>
        <button onClick={onClick} className={styles.closeButton} type="button">
          <Image width={30} height={30} src={CloseIcon} alt="Close Popup Button" />
        </button>
        <div className={classNames(styles.cornerDecoration, styles.topLeftCorner)} />
        <div className={classNames(styles.cornerDecoration, styles.topRightCorner)} />
        <div className={classNames(styles.cornerDecoration, styles.bottomRightCorner)} />
        <div className={classNames(styles.cornerDecoration, styles.bottomLeftCorner)} />
        {children}
      </div>
    </div>
  );
};

export default PopinCard;
