import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';

import DescriptiveCard from '../../components/rules/DescriptiveCard';

import * as GoldOwl from '../../../public/static/image/owls/gold-owl.svg';

import styles from '../../styles/Rules.module.scss';

type Props = {};

const Rules: NextPage<Props> = () => {
  const { t } = useTranslation('rules');

  return (
    <div className={styles.container}>
      <DescriptiveCard
        isSmall
        title={t('cards.card1.title')}
        description={t('cards.card1.description')}
        icon={GoldOwl}
      />
      <DescriptiveCard
        isSmall
        title={t('cards.card2.title')}
        description={t('cards.card2.description')}
        icon={GoldOwl}
      />
      <DescriptiveCard
        isSmall
        title={t('cards.card3.title')}
        description={t('cards.card3.description')}
        icon={GoldOwl}
      />
      <DescriptiveCard
        isSmall
        title={t('cards.card4.title')}
        description={t('cards.card4.description')}
        icon={GoldOwl}
      />
    </div>
  );
};

export default Rules;
