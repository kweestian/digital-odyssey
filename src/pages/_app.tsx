import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';

import '@/styles/globals.scss';

import { ExperienceProvider } from '@/contexts/global';
import { DefaultLayout } from '@/components';
import { NextPageWithLayout } from '../types/common';
import ErrorBoundary from './ErrorBoundary';

type AppPropsWithLayout = AppProps<{ initialSession: Session }> & {
  Component: NextPageWithLayout;
  locale?: string;
};
function DigitalOdyssey({ Component, pageProps }: AppPropsWithLayout) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  const { initialSession, ...props } = pageProps;

  return (
    <SessionContextProvider supabaseClient={supabaseClient} initialSession={initialSession}>
      <ExperienceProvider>
        <ErrorBoundary>
          <DefaultLayout>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...props} />
          </DefaultLayout>
        </ErrorBoundary>
      </ExperienceProvider>
    </SessionContextProvider>
  );
}

export default DigitalOdyssey;
