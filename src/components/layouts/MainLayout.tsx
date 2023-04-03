import React from 'react';
import Header from '../Header';

import { menu } from '../../data/layout';
import Navbar from './Navbar';

import styles from './MainLayout.module.scss';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main className={styles.container}>
      <Navbar menu={menu} />
      {children}
    </main>
  </>
);

export default Layout;
