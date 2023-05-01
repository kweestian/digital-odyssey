import React, { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import PopinCard from '@/components/common/PopinCard';
import styles from './RewardCard.module.scss';

interface RewardCardProps {
  title: string;
  isActive?: boolean;
  cardUrl: string;
}

const RewardCard = ({ title, isActive, cardUrl }: RewardCardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {isOpen && isActive && (
        <PopinCard onClick={() => setIsOpen(false)}>
          <Image src={cardUrl} alt={title} className={styles.cardImg} width={300} height={800} />
          {title}
        </PopinCard>
      )}
      <div className={classNames(styles.container, { [styles.isNotActive]: !isActive })}>
        <button onClick={() => setIsOpen(true)} type="button">
          <Image src={cardUrl} alt={title} className={styles.cardImg} width={200} height={600} />
        </button>
      </div>
    </>
  );
};

export default RewardCard;
