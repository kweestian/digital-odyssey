import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';
import { Poppins } from '@next/font/google';

import '@/styles/globals.scss';

import { GlobalProvider, AtomProviders } from '@/contexts';
import { DefaultLayout } from '@/components';
import { NextPageWithLayout } from '../types/common';
import ErrorBoundary from './ErrorBoundary';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['italic', 'normal'],
});
type AppPropsWithLayout = AppProps<{ initialSession: Session }> & {
  Component: NextPageWithLayout;
  locale?: string;
};
function DigitalOdyssey({ Component, pageProps }: AppPropsWithLayout) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  const { initialSession, ...props } = pageProps;

  return (
    <>
      <style jsx global>
        {`
          html,
          body {
            font-family: ${poppins.style.fontFamily};
          }
        `}
      </style>
      <SessionContextProvider supabaseClient={supabaseClient} initialSession={initialSession}>
        <AtomProviders>
          <GlobalProvider>
            <ErrorBoundary>
              <DefaultLayout>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Component {...props} />
              </DefaultLayout>
            </ErrorBoundary>
          </GlobalProvider>
        </AtomProviders>
      </SessionContextProvider>
    </>
  );
}

export default DigitalOdyssey;
