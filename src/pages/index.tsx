import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';

type Props = {};

const Home: NextPage<Props> = () => {
  const { t } = useTranslation();
  const title = t('home:title');
  return (
    <div>
      {title}
    </div>
  );
};

export default Home;
