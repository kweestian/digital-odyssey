import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import Trans from 'next-translate/Trans';
import styles from './DescriptiveCard.module.scss';

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
        Test text
        {/* <Trans i18nKey={descriptionKey} components={{ br: <br /> }} /> */}
      </p>
      <Image src={icon} alt={title} />
    </div>
  </div>
);

export default DescriptiveCard;
