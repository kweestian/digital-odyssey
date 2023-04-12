import React from 'react';
import type { AppProps } from 'next/app';

import '@/styles/globals.scss';

import { Layout } from '../components';
import { NextPageWithLayout } from '../types/common';
import ErrorBoundary from './ErrorBoundary';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  locale?: string;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const { ...props } = pageProps;

  return (
    <ErrorBoundary>
      <Layout>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...props} />
      </Layout>
    </ErrorBoundary>
  );
}

export default MyApp;
