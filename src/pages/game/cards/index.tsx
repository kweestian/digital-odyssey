import { NextPage } from 'next';

import { RewardCard } from '@/components/games/cards';
import { gameCards } from '@/data/cards';

import { GameLayout } from '@/components';
import styles from './Cards.module.scss';

type Props = {};

const Cards: NextPage<Props> = () => (
  <GameLayout>
    <div className={styles.container}>
      {gameCards.map((gameCard) => (
        <RewardCard
          title={gameCard.title}
          isActive={gameCard.isActive}
          cardUrl={gameCard.cardSvg}
          key={gameCard.title}
        />
      ))}
    </div>
  </GameLayout>
);

export default Cards;
