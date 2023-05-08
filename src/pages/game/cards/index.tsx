import { NextPage } from 'next';

import { RewardCard } from '@/components/games/cards';
import { useMapData } from '@/hooks';

import { GameLayout } from '@/components';
import styles from './Cards.module.scss';

type Props = {};

const Cards: NextPage<Props> = () => {
  const { data } = useMapData();
  const allExperiences = data.map(({ experiences }) => experiences).flat();
  return (
    <GameLayout>
      <div className={styles.container}>
        {allExperiences.map(({ isCompleted, key, keyLearning }) => (
          <RewardCard
            addtitionalResrouces={keyLearning.additionalRessources}
            content={keyLearning.text}
            isActive={isCompleted}
            cardUrl={`/static/image/cards/${key}.webp`}
            key={key}
          />
        ))}
      </div>
    </GameLayout>
  );
};

export default Cards;
