import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';

import { DescriptiveCard, GameLayout } from '@/components';

import * as GoldOwl from '@/image/owls/3d/gold-owl.svg';
import * as MapContour from '@/image/rules/PICTO_CONTOUR_MAP.svg';
import * as PositionIcon from '@/image/rules/PICTO_POSITION.svg';
import * as VideoIcon from '@/image/rules/PICTO_VIDEO.svg';

import styles from './Rules.module.scss';

type Props = {};

const Rules: NextPage<Props> = () => {
  const { t } = useTranslation();

  return (
    <GameLayout>
      <div className={styles.container}>
        <DescriptiveCard
          isCentered
          title={t('rules:cards.card1.title')}
          descriptionKey="rules:cards.card1.description"
          icon={VideoIcon}
        />
        <DescriptiveCard
          title={t('rules:cards.card2.title')}
          descriptionKey="rules:cards.card2.description"
          icon={MapContour}
        />
        <DescriptiveCard
          isCentered
          title={t('rules:cards.card3.title')}
          descriptionKey="rules:cards.card3.description"
          icon={GoldOwl}
        />
        <DescriptiveCard
          title={t('rules:cards.card4.title')}
          descriptionKey="rules:cards.card4.description"
          icon={PositionIcon}
        />
      </div>
    </GameLayout>
  );
};

export default Rules;
