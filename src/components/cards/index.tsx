import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import styles from './GameCard.module.scss';

interface GameCardProps {
  title: string;
  isActive?: boolean;
  cardUrl: typeof import('*.svg');
}

const GameCard = ({ title, isActive, cardUrl }: GameCardProps) => (
  <div className={classNames(styles.container, { [styles.isNotActive]: !isActive })}>
    <Image src={cardUrl} alt={title} />
  </div>
);

export default GameCard;
