import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

import { DescriptiveCard, GameLayout } from '@/components';

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
        <div className={styles.row}>
          <DescriptiveCard
            isCentered
            title={t('rules:cards.card1.title')}
            descriptionKey="rules:cards.card1.description"
            icon="/static/image/rules/PICTO_VIDEO.svg"
            hasIconAction
            width={150}
            height={81}
          />
          <Image className={styles.firstArrow} src={RightDirection} alt="Bottom Direction Line" />
          <DescriptiveCard
            title={t('rules:cards.card2.title')}
            descriptionKey="rules:cards.card2.description"
            icon="/static/image/rules/rules-spinning-card.gif"
            width={150}
            height={81}
          />
        </div>
        {/* <div className={styles.secondCard}>
        </div> */}
        <div className={styles.row}>
          <div className={styles.emptyDescriptiveCard} />
          <div className={styles.emptyArrowSpace} />

          <div className={styles.emptyDescriptiveCard}>
            <Image className={styles.secondArrow} src={BottomDirection} alt="Bottom Direction Line" />
          </div>

          {/* <div className={styles.emptyDescriptiveCard} /> */}
        </div>
        <div className={styles.row}>
          <DescriptiveCard
            title={t('rules:cards.card4.title')}
            descriptionKey="rules:cards.card4.description"
            icon="/static/image/rules/gold-owl-rules.gif"
            bigImage
            width={150}
            height={81}
          />
          <Image className={styles.thirdArrow} src={LeftArrow} alt="Bottom Direction Line" />
          <DescriptiveCard
            isCentered
            title={t('rules:cards.card3.title')}
            descriptionKey="rules:cards.card3.description"
            icon="/static/image/rules/rules-owl.gif"
            width={150}
            height={81}
          />
        </div>
        {/* <div className={styles.fourthCard}>
        </div> */}
      </div>
    </GameLayout>
  );
};

export default Rules;
