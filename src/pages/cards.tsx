import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/common.module.scss';

type Props = {};

const Cards: NextPage<Props> = () => {
  const { t } = useTranslation();
  const title = t('common:cardsPageTitle');

  return (
    <div className={styles.mainScreen}q>
      {title}
    </div>
  );
};

export default Cards;
