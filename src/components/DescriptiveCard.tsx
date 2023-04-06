import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import styles from './DescriptiveCard.module.scss';

interface DescriptiveCardProps {
  isSmall?: boolean,
  title: string,
  description: string,
  icon: typeof import('*.svg'),
}

const DescriptiveCard = ({ isSmall, title, description, icon }: DescriptiveCardProps) => {
  const ok = 'ok';

  return (
    <div className={classNames(styles.container, { [styles.small]: isSmall })}>
      <div className={classNames(styles.cornerDecoration, styles.topLeftCorner)} />
      <div className={classNames(styles.cornerDecoration, styles.topRightCorner)} />
      <div className={classNames(styles.cornerDecoration, styles.bottomRightCorner)} />
      <div className={classNames(styles.cornerDecoration, styles.bottomLeftCorner)} />

      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{description}</p>
        <Image src={icon} alt={title} />
      </div>
    </div>
  );
};

export default DescriptiveCard;
