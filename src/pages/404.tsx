import useTranslation from 'next-translate/useTranslation';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return <div>{t('common:not-found.title')}</div>;
};

export default NotFoundPage;
