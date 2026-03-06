/* eslint-disable max-len */
import { NextPage } from 'next';
import { useState } from 'react';

import { RewardCard, GameLayout } from '@/components';
import PopinCard from '@/components/common/PopinCard';
import { KeyLearningsContent } from '@/components/common';
import { useMapData } from '@/hooks';

import styles from './Cards.module.scss';

type Props = {};

const Cards: NextPage<Props> = () => {
  const { data } = useMapData();
  const [openRegionKey, setOpenRegionKey] = useState<string | null>(null);
  const firstTwoRegions = data.slice(0, 2);
  const lastRegions = data.slice(2, 5);

  const openRegion = data.find(({ regionKey }) => regionKey === openRegionKey);

  return (
    <GameLayout>
      <div className={styles.container}>
        {openRegion && (
          <PopinCard onClick={() => setOpenRegionKey(null)}>
            <KeyLearningsContent
              content={openRegion.keyLearning.text}
              additionalResources={openRegion.keyLearning.additionalResources}
              videoUrl={`/static/video/cards/${openRegionKey}.mp4`}
            />
          </PopinCard>
        )}
        <div />
        <div className={styles.cardsContainer}>
          <div className={styles.firstRegionsContainer}>
            {firstTwoRegions.map(({ regionKey, keyLearning, color, isComplete: isRegionComplete, title }) => (
              <div key={regionKey} className={styles.firstRegions}>
                <div className={styles.regionCards}>
                  <RewardCard regionKey={regionKey} keyLearning={keyLearning} isActive={isRegionComplete} />
                </div>
                <button
                  type="button"
                  className={styles.regionName}
                  style={{ color }}
                  disabled={!isRegionComplete}
                  onClick={() => setOpenRegionKey(regionKey)}
                >
                  <span style={{ opacity: isRegionComplete ? 1 : 0.5 }}>{title.textParts.join(' ').toUpperCase()}</span>
                </button>
              </div>
            ))}
          </div>
          <div className={styles.lastRegionsContainer}>
            {lastRegions.map(({ regionKey, color, keyLearning, isComplete, title }) => (
              <div key={regionKey} className={styles.lastRegions}>
                <div className={styles.regionCards}>
                  <RewardCard regionKey={regionKey} keyLearning={keyLearning} isActive={isComplete} />
                </div>
                <button
                  type="button"
                  className={styles.regionName}
                  style={{ color }}
                  disabled={!isComplete}
                  onClick={() => setOpenRegionKey(regionKey)}
                >
                  <span style={{ opacity: isComplete ? 1 : 0.5 }}>{title.textParts.join(' ').toUpperCase()}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
        <p className={styles.textBox}>
          You win a concept card after completing all experiences in a territory.
          <br /> Click on any illuminated card to read the key learnings for that territory.
        </p>
      </div>
    </GameLayout>
  );
};

export default Cards;
