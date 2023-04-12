import { NextPage } from 'next';
import styles from './Cards.module.scss';

import { GameCard } from './components';
import { gameCards } from '../../../data/cards';

type Props = {};

const Cards: NextPage<Props> = () => (
  <div className={styles.container}>
    {gameCards.map((gameCard) => (
      <GameCard title={gameCard.title} isActive={gameCard.isActive} cardUrl={gameCard.cardSvg} key={gameCard.title} />
    ))}
  </div>
);

export default Cards;
