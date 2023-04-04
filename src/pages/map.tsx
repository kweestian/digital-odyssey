import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';

type Props = {};

const Map: NextPage<Props> = () => {
  const { t } = useTranslation('common');
  const title = t('menuTitles.map');

  return (
    <div>
      {title}
    </div>
  );
};

export default Map;
