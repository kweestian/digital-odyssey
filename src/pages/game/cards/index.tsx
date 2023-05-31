/* eslint-disable max-len */
import { NextPage } from 'next';

import { RewardCard, GameLayout } from '@/components';
import { useMapData } from '@/hooks';

import styles from './Cards.module.scss';

type Props = {};

const Cards: NextPage<Props> = () => {
  const { data } = useMapData();
  const firstTwoRegions = data.slice(0, 2);
  const lastRegions = data.slice(2, 5);

  return (
    <GameLayout>
      <div className={styles.container}>
        <div className={styles.firstRegionsContainer}>
          {firstTwoRegions.map(({ regionKey, color, experiences }) => (
            <div key={regionKey} className={styles.firstRegions}>
              <div className={styles.regionCards}>
                {experiences.map(({ isCompleted, key, keyLearning }) => (
                  <RewardCard
                    key={key}
                    additionalRessources={keyLearning.additionalRessources}
                    content={keyLearning.text}
                    isActive={isCompleted}
                    videoUrl={`/static/video/cards/${key}.mp4`}
                    experienceKey={key}
                  />
                ))}
              </div>
              <button type="button" className={styles.regionName} style={{ color }}>
                {regionKey.replace('-', ' ').toUpperCase()}
              </button>
            </div>
          ))}
        </div>
        <div className={styles.lastRegionsContainer}>
          {lastRegions.map(({ regionKey, color, experiences }) => (
            <div key={regionKey} className={styles.lastRegions}>
              <div className={styles.regionCards}>
                {experiences.map(({ isCompleted, key, keyLearning }) => (
                  <RewardCard
                    key={key}
                    additionalRessources={keyLearning.additionalRessources}
                    content={keyLearning.text}
                    isActive={isCompleted}
                    videoUrl={`/static/video/cards/${key}.mp4`}
                    experienceKey={key}
                  />
                ))}
              </div>
              <button type="button" className={styles.regionName} style={{ color }}>
                {regionKey.replace('-', ' ').toUpperCase()}
              </button>
            </div>
          ))}
        </div>
      </div>
    </GameLayout>
  );
};

export default Cards;
