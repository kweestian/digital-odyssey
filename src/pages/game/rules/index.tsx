import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

import { DescriptiveCard } from '@/components';
import CardLayout from '@/components/common/PopinCard';
import Trans from 'next-translate/Trans';

import * as GoldOwl from '@/image/owls/gold-owl.svg';

import styles from './Rules.module.scss';

type Props = {};

const Rules: NextPage<Props> = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <DescriptiveCard
        isSmall
        title={t('rules:cards.card1.title')}
        descriptionKey="rules:cards.card1.description"
        icon={GoldOwl}
      />
      <DescriptiveCard
        isSmall
        title={t('rules:cards.card2.title')}
        descriptionKey="rules:cards.card2.description"
        icon={GoldOwl}
      />
      <DescriptiveCard
        isSmall
        title={t('rules:cards.card3.title')}
        descriptionKey="rules:cards.card3.description"
        icon={GoldOwl}
      />
      <DescriptiveCard
        isSmall
        title={t('rules:cards.card4.title')}
        descriptionKey="rules:cards.card4.description"
        icon={GoldOwl}
      />
    </div>
  );
};

export default Rules;
