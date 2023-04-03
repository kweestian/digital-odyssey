import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';

type Props = {};

const Cards: NextPage<Props> = () => {
  const { t } = useTranslation();
  const title = t('common:cardsPageTitle');

  return (
    <div>
      {title}
    </div>
  );
};

export default Cards;
