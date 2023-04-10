import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { Inter } from '@next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

/**
 *
 * @returns A component that sets all the meta tags and font assets
 */
const Header = () => {
  const { t } = useTranslation();
  const metaDescription = t('common:meta_description');
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${inter.style.fontFamily};
          }
        `}
      </style>

      <Head>
        <meta property="og:image" content="/static/image/logo-social.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/static/image/favicon.svg" />
        <link rel="icon" type="image/png" href="/static/image/favicon.png" />
        <meta name="color-scheme" content="only" />

        {/* <meta name="google-site-verification" content="" /> */}

        <meta name="description" content={metaDescription} />
        <title>Green Tempalte</title>
      </Head>
    </>
  );
};

export default Header;
