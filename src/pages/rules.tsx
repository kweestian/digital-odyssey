import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/common.module.scss';

type Props = {};

const Rules: NextPage<Props> = () => {
  const { t } = useTranslation();
  const title = t('common:rulesPageTitle');

  return (
    <div className={styles.mainScreen}>
      {title}
    </div>
  );
};

export default Rules;
