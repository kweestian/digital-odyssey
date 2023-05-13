import React from 'react';

import styles from './MainScreen.module.scss';

const MainScreen = ({
  children,
  title,
  titleColor = 'white',
}: {
  children: React.ReactNode;
  title: string;
  titleColor?: string;
}) => (
  <div className={styles.subLayoutContainer}>
    <div className={styles.buttonContainer}>
      <h1 style={{ color: titleColor }}>{title}</h1>
    </div>
    <div className={styles.mainScreenFirstBorder} />
    <div className={styles.mainScreenContainer}>{children}</div>
  </div>
);

export default MainScreen;
