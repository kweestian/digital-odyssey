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
        {allExperiences.map(({ isCompleted, card, key, keyLearning }) => (
          <RewardCard title={keyLearning.text} isActive={isCompleted} cardUrl={card} key={key} />
        ))}
      </div>
    </GameLayout>
  );
};

export default Cards;
