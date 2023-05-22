/* eslint-disable max-len */
import { NextPage } from 'next';

import { RewardCard, GameLayout } from '@/components';
import { useMapData } from '@/hooks';
import { blurUrls } from '@/data/cards';

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
          {firstTwoRegions.map(({ regionKey, experiences }) => (
            <div key={regionKey} className={styles.firstRegions}>
              {experiences.map(({ isCompleted, key, keyLearning }) => (
                <RewardCard
                  additionalRessources={keyLearning.additionalRessources}
                  content={keyLearning.text}
                  isActive={isCompleted}
                  videoUrl={`/static/video/cards/${key}.mp4`}
                  key={key}
                />
              ))}
            </div>
          ))}
        </div>
        <div className={styles.lastRegionsContainer}>
          {lastRegions.map(({ regionKey, experiences }) => (
            <div key={regionKey} className={styles.lastRegions}>
              {experiences.map(({ isCompleted, key, keyLearning }) => (
                <RewardCard
                  additionalRessources={keyLearning.additionalRessources}
                  content={keyLearning.text}
                  isActive={isCompleted}
                  videoUrl={`/static/video/cards/${key}.mp4`}
                  key={key}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </GameLayout>
  );
};

export default Cards;
