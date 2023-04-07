import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';

import DescriptiveCard from '../../components/DescriptiveCard';

import * as GoldOwl from '../../../public/static/image/owls/gold-owl.svg';

import styles from '../../styles/Rules.module.scss';

type Props = {};

interface Card {
  title: string,
  description: string,
  icon: string,
}

const Rules: NextPage<Props> = () => {
  const { t } = useTranslation('rules');
  const ruleCards: Card[] = [
    t('cards.0', {}, { returnObjects: true }),
    t('cards.1', {}, { returnObjects: true }),
    t('cards.2', {}, { returnObjects: true }),
    t('cards.3', {}, { returnObjects: true }),
  ];

  return (
    <div className={styles.container}>
      {ruleCards.map((card) => (
        <DescriptiveCard isSmall title={card.title} description={card.description} icon={GoldOwl} key={card.title} />
      ))}
    </div>
  );
};

export default Rules;
