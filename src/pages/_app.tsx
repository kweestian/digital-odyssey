import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';

import '@/styles/globals.scss';

import { Layout } from '../components';
import { NextPageWithLayout } from '../types/common';
import ErrorBoundary from './ErrorBoundary';

type AppPropsWithLayout = AppProps<{ initialSession: Session }> & {
  Component: NextPageWithLayout;
  locale?: string;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  const { initialSession, ...props } = pageProps;

  return (
    <ErrorBoundary>
      <SessionContextProvider supabaseClient={supabaseClient} initialSession={initialSession}>
        <Layout>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...props} />
        </Layout>
      </SessionContextProvider>
    </ErrorBoundary>
  );
}

export default MyApp;
