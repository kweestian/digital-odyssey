import React, { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import PopinCard from '@/components/common/PopinCard';
import { RenderHtml } from '@/components/common';
import styles from './RewardCard.module.scss';

interface RewardCardProps {
  content: string;
  isActive?: boolean;
  cardUrl: string;
  additionalRessources?: AdditionalResources[];
}

const RewardCard = ({ content, isActive, cardUrl, additionalRessources }: RewardCardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {isOpen && isActive && (
        <PopinCard onClick={() => setIsOpen(false)}>
          <Image src={cardUrl} alt={content} className={styles.cardImg} width={238.59} height={421.74} />
          <div className={styles.contentContainer}>
            <h3>KEY LEARNINGS : </h3>
            <RenderHtml htmlContent={content} />
            <h4>Additional Resources :</h4>
            {additionalRessources?.map(({ text, link }) => (
              <p key={link}>
                <a href={link} target="_blank" rel="noreferrer">
                  {text}
                </a>
              </p>
            ))}
          </div>
        </PopinCard>
      )}
      <div className={classNames(styles.container, { [styles.isNotActive]: !isActive })}>
        <button onClick={() => setIsOpen(true)} type="button">
          <Image src={cardUrl} alt={content} className={styles.cardImg} width={96.03} height={170.28} />
        </button>
      </div>
    </>
  );
};

export default RewardCard;
