import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';

/**
 *
 * @returns A component that sets all the meta tags and font assets
 */
const Header = () => {
  const { t } = useTranslation();
  const metaDescription = t('common:meta_description');
  return (
    <Head>
      <meta property="og:image" content="/static/image/logo-social.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/svg+xml" href="/static/image/favicon.svg" />
      <meta name="color-scheme" content="only" />

      {/* <meta name="google-site-verification" content="" /> */}

      <meta name="description" content={metaDescription} />
      <title>Digital Odyssey</title>
    </Head>
  );
};

export default Header;
