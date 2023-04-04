import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';

type Props = {};

const Rules: NextPage<Props> = () => {
  const { t } = useTranslation();
  const title = t('common:rulesPageTitle');

  return (
    <div>
      {title}
    </div>
  );
};

export default Rules;
