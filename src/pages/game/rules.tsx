import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';

type Props = {};

const Rules: NextPage<Props> = () => {
  const { t } = useTranslation('common');
  const title = t('menuTitles.rules');

  return <div>{title}</div>;
};

export default Rules;
