import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';

type Props = {};

const Map: NextPage<Props> = () => {
  const { t } = useTranslation();
  const title = t('common:mapPageTitle');

  return (
    <div>
      {title}
    </div>
  );
};

export default Map;
