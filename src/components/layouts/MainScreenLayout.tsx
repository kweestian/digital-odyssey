import React from 'react';
import Image from 'next/image';

import styles from './MainScreenLayout.module.scss';

import * as Border from '../../../public/static/image/mainScreenBorder.svg';

const MainScreen = ({ children, title }: {children: React.ReactNode, title: string}) => (
  <div className={styles.subLayoutContainer}>
    <div className={styles.mainScreenBorder}>
      <div className={styles.buttonContainer}>
        <div className={styles.button}>
          <h1>{title}</h1>
        </div>
      </div>
      <Image src={Border} alt="" />
    </div>
    {children}
  </div>
);

export default MainScreen;
