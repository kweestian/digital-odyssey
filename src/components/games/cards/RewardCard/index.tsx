import React, { useState } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import Image from 'next/image';
import PopinCard from '@/components/common/PopinCard';
import { KeyLearningsContent } from '@/components/common';
import styles from './RewardCard.module.scss';

interface RewardCardProps {
  keyLearning: {
    text: string;
    additionalResources?: AdditionalResources[];
  };
  isActive?: boolean;
  regionKey: RegionKey;
}

const RewardCard = ({ keyLearning, isActive, regionKey }: RewardCardProps) => {
  const { push } = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {isOpen && isActive && (
        <PopinCard onClick={() => setIsOpen(false)}>
          <KeyLearningsContent
            content={keyLearning.text}
            additionalResources={keyLearning.additionalResources}
            videoUrl={`/static/video/cards/${regionKey}.mp4`}
          />
        </PopinCard>
      )}
      <div className={classNames(styles.container, { [styles.isNotActive]: !isActive })}>
        <button
          onClick={() => {
            if (isActive) {
              setIsOpen(true);
            } else {
              push({ pathname: '/game/map', query: { regionKey } });
            }
          }}
          type="button"
        >
          <div className={styles.imageContainer}>
            <Image
              src={`/static/image/cards/${regionKey}.png`}
              alt={`${regionKey} card`}
              width={936}
              height={1663}
              className={styles.cardImage}
            />
          </div>
        </button>
      </div>
    </>
  );
};

export default RewardCard;
