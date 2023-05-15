import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

import { DescriptiveCard, GameLayout } from '@/components';

import GoldOwl from '@/image/owls/flat/gold-owl.png';
import MapContour from '@/image/rules/PICTO_CONTOUR_MAP.svg';
import PositionIcon from '@/image/rules/PICTO_POSITION.svg';
import VideoIcon from '@/image/rules/PICTO_VIDEO.svg';
import BottomDirection from '@/image/rules/direction_bottom.svg';
import RightDirection from '@/image/rules/direction_right.svg';
import LeftArrow from '@/image/rules/left_arrow.svg';

import styles from './Rules.module.scss';

type Props = {};

const Rules: NextPage<Props> = () => {
  const { t } = useTranslation();

  return (
    <GameLayout>
      <div className={styles.container}>
        <div className={styles.firstCard}>
          <DescriptiveCard
            isCentered
            title={t('rules:cards.card1.title')}
            descriptionKey="rules:cards.card1.description"
            icon={VideoIcon}
            hasIconAction
          />
        </div>
        <Image className={styles.firstArrow} src={RightDirection} alt="Bottom Direction Line" />
        <div className={styles.secondCard}>
          <DescriptiveCard
            title={t('rules:cards.card2.title')}
            descriptionKey="rules:cards.card2.description"
            icon={MapContour}
          />
        </div>
        <Image className={styles.secondArrow} src={BottomDirection} alt="Bottom Direction Line" />
        <div className={styles.thirdCard}>
          <DescriptiveCard
            title={t('rules:cards.card4.title')}
            descriptionKey="rules:cards.card4.description"
            icon={PositionIcon}
          />
        </div>
        <Image className={styles.thirdArrow} src={LeftArrow} alt="Bottom Direction Line" />
        <div className={styles.fourthCard}>
          <DescriptiveCard
            isCentered
            title={t('rules:cards.card3.title')}
            descriptionKey="rules:cards.card3.description"
            icon={GoldOwl}
          />
        </div>
      </div>
    </GameLayout>
  );
};

export default Rules;
