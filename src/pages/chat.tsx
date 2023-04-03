import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';

type Props = {};

const Chat: NextPage<Props> = () => {
  const { t } = useTranslation();
  const title = t('common:chatPageTitle');

  return (
    <div>
      {title}
    </div>
  );
};

export default Chat;
