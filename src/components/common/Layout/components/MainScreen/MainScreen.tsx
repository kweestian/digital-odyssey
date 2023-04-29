import React from 'react';

import styles from './MainScreen.module.scss';

const MainScreen = ({ children, title }: { children: React.ReactNode; title: string }) => (
  <div className={styles.subLayoutContainer}>
    <div className={styles.buttonContainer}>
      <h1>{title}</h1>
    </div>
    <div className={styles.mainScreenFirstBorder} />
    <div className={styles.mainScreenContainer}>{children}</div>
  </div>
);

export default MainScreen;
