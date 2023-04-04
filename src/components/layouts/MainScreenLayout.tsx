import React from 'react';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import _ from 'lodash';

import styles from './MainScreenLayout.module.scss';

import * as Border from '../../../public/static/image/mainScreenBorder.svg';

const MainScreen = ({ children }: {children: React.ReactNode}) => {
  const router = useRouter();
  const { t } = useTranslation();
  const localeType = _.trim(router.pathname, '/');
  const title = t(`${localeType}:pageTitle`);

  return (
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
};

export default MainScreen;
