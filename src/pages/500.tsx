import useTranslation from 'next-translate/useTranslation';

const Custom500 = () => {
  const { t } = useTranslation();

  return <div>{t('common:server-error.title')}</div>;
};

export default Custom500;
