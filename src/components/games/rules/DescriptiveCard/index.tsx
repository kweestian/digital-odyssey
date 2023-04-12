import React from 'react';
import Image from 'next/image';

import Trans from 'next-translate/Trans';
import styles from './DescriptiveCard.module.scss';

interface DescriptiveCardProps {
  isSmall?: boolean;
  title: string;
  descriptionKey: string;
  icon: typeof import('*.svg');
}

const DescriptiveCard = ({ isSmall, title, descriptionKey, icon }: DescriptiveCardProps) => (
  <div className={styles.container}>
    <div className={styles.cornerDecoration} />
    <div className={styles.cornerDecoration} />
    <div className={styles.cornerDecoration} />
    <div className={styles.cornerDecoration} />

    <div className={styles.content}>
      <h1>{title}</h1>
      <p>
        <Trans i18nKey={descriptionKey} components={{ br: <br /> }} />
      </p>
      <Image src={icon} alt={title} />
    </div>
  </div>
);

export default DescriptiveCard;
