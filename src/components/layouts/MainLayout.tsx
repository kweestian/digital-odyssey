import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import _ from 'lodash';
import { useRouter } from 'next/router';

import Header from '../Header';
import Navbar from './Navbar';
import MainScreen from './MainScreenLayout';

import styles from './MainLayout.module.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { t } = useTranslation();
  const localeType = _.trim(router.pathname, '/');
  const title = t(`${localeType}:pageTitle`);

  return (
    <>
      <Header />
      <main className={styles.container}>
        <Navbar />
        <MainScreen title={title}>{children}</MainScreen>
      </main>
    </>
  );
};

export default Layout;
