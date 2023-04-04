import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';

type Props = {};

const Chat: NextPage<Props> = () => {
  const { t } = useTranslation('common');
  const title = t('menuTitles.chat');

  return (
    <div>
      {title}
    </div>
  );
};

export default Chat;
