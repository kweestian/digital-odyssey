import React from 'react';
import Header from '../Header';

import Navbar from './Navbar';

import styles from './MainLayout.module.scss';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main className={styles.container}>
      <Navbar />
      <div className={styles.subLayoutContainer}>
        {children}
      </div>
    </main>
  </>
);

export default Layout;
