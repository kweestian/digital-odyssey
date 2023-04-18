import { NextPage } from 'next';

import { RewardCard } from '@/components/games/cards';
import { gameCards } from '@/data/cards';

import styles from './Cards.module.scss';

type Props = {};

const Cards: NextPage<Props> = () => (
  <div className={styles.container}>
    {gameCards.map((gameCard) => (
      <RewardCard title={gameCard.title} isActive={gameCard.isActive} cardUrl={gameCard.cardSvg} key={gameCard.title} />
    ))}
  </div>
);

export default Cards;
