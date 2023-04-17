import React, { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import PopinCard from '@/components/common/PopinCard';
import styles from './GameCard.module.scss';

interface GameCardProps {
  title: string;
  isActive?: boolean;
  cardUrl: typeof import('*.svg');
}

const GameCard = ({ title, isActive, cardUrl }: GameCardProps) => {
  const test = 'test';
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {isOpen && isActive && <PopinCard onClick={() => setIsOpen(false)}>Salut</PopinCard>}
      <div className={classNames(styles.container, { [styles.isNotActive]: !isActive })}>
        <button onClick={() => setIsOpen(true)} type="button">
          <Image src={cardUrl} alt={title} className={styles.cardImg} />
        </button>
      </div>
    </>
  );
};

export default GameCard;
