import React, { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import PopinCard from '@/components/common/PopinCard';
import { KeyLearningsContent } from '@/components/common';
import styles from './RewardCard.module.scss';

interface RewardCardProps {
  content: string;
  isActive?: boolean;
  cardUrl: string;
  additionalRessources?: AdditionalResources[];
  blurUrl: string;
  // blurUrl;
}

const RewardCard = ({ content, isActive, cardUrl, additionalRessources, blurUrl }: RewardCardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {isOpen && isActive && (
        <PopinCard onClick={() => setIsOpen(false)}>
          <KeyLearningsContent
            blurUrl={blurUrl}
            cardUrl={cardUrl}
            content={content}
            additionalRessources={additionalRessources}
          />
        </PopinCard>
      )}
      <div className={classNames(styles.container, { [styles.isNotActive]: !isActive })}>
        <button onClick={() => setIsOpen(true)} type="button">
          <Image
            placeholder="blur"
            blurDataURL={blurUrl}
            src={cardUrl}
            alt={content}
            className={styles.cardImg}
            width={96.03}
            height={170.28}
          />
        </button>
      </div>
    </>
  );
};

export default RewardCard;
