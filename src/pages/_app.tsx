import React from 'react';
import type { AppProps } from 'next/app';

import '../styles/globals.css';

import { MainLayout } from '../components';
import { NextPageWithLayout } from '../types/common';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  locale?: string;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <MainLayout>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
