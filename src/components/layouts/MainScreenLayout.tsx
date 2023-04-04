import React from 'react';

import styles from './MainScreenLayout.module.scss';

const MainScreen = ({ children, title }: {children: React.ReactNode, title: string}) => (
  <div className={styles.subLayout}>
    <div className={styles.buttonContainer}>
      <h1>{title}</h1>
    </div>
    <div className={styles.subLayoutContainer}>
      {children}
    </div>
  </div>
);

export default MainScreen;
