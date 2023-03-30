import { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';

type Props = {};

const Home: NextPage<Props> = () => {
  const { t } = useTranslation();
  const title = t('home:title');
  return (
    <div className="bg-[#52b788] w-screen h-screen flex items-center justify-center text-center font-semibold text-4xl">
      {title}
    </div>
  );
};

export default Home;
