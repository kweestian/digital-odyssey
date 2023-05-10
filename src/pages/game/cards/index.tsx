import { NextPage } from 'next';

import { RewardCard } from '@/components/games/cards';
import { useMapData } from '@/hooks';

import { GameLayout } from '@/components';
import styles from './Cards.module.scss';

type Props = {};

const Cards: NextPage<Props> = () => {
  const { data } = useMapData();
  const allExperiences = data.map(({ experiences }) => experiences).flat();

  console.log(data, allExperiences);

  return (
    <GameLayout>
      <div className={styles.container}>
        {data.map(({ regionKey, experiences }) => (
          <div key={regionKey} className={styles.regionContainer}>
            {experiences.map(({ isCompleted, key, keyLearning }) => (
              <RewardCard
                addtitionalResrouces={keyLearning.additionalRessources}
                content={keyLearning.text}
                isActive={isCompleted}
                cardUrl={`/static/image/cards/${key}.webp`}
                key={key}
              />
            ))}
          </div>
        ))}
      </div>
    </GameLayout>
  );
};

export default Cards;
