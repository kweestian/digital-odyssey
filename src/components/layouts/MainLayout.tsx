import React from 'react';

import Header from '../Header';
import Navbar from './Navbar';
import MainScreen from './MainScreenLayout';

import styles from './MainLayout.module.scss';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main className={styles.container}>
      <Navbar />
      <MainScreen>{children}</MainScreen>
    </main>
  </>
);

export default Layout;
