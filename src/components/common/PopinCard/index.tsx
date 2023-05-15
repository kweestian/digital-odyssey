import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import CloseIcon from '@/image/map/picto/PICTO_CROIX.svg';

import styles from './PopinCard.module.scss';

interface PopinCardProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const PopinCard = ({ children, onClick }: PopinCardProps) => (
  <div className={styles.container}>
    <div className={styles.popinContainer}>
      <button onClick={onClick} className={classNames(styles.closeButton, 'ignore-click')} type="button">
        <Image width={30} height={30} src={CloseIcon} alt="Close Popup Button" className="ignore-click" />
      </button>
      {children}
    </div>
  </div>
);

export default PopinCard;
