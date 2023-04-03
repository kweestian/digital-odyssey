import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import styles from '../styles/common.module.scss';

type Props = {};

const Chat: NextPage<Props> = () => {
  const { t } = useTranslation();
  const title = t('common:chatPageTitle');

  return (
    <div className={styles.mainScreen}>
      {title}
    </div>
  );
};

export default Chat;
