import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';

type Props = {};

const Cards: NextPage<Props> = () => {
  const { t } = useTranslation('common');
  const title = t('menuTitles.cards');

  return (
    <div>
      {title}
    </div>
  );
};

export default Cards;
