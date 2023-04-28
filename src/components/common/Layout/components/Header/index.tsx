import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['italic', 'normal'],
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
          html,
          body,
          button {
            font-family: ${poppins.style.fontFamily};
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
        <title>Digital Odyssey</title>
      </Head>
    </>
  );
};

export default Header;
