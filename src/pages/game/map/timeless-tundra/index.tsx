/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next';
import Image from 'next/image';

import { GameLayout } from '@/components';

import * as Certificate from '@/image/map/timeless-tundra/certificate.svg';
import * as GoldenOwl from '@/image/rules/gold-owl-rules.gif';

import classNames from 'classnames';
import styles from './timelessTundra.module.scss';

const TimelessTundraPage: NextPage = () => {
  const test = 'test';

  return (
    <GameLayout>
      <div className={styles.container}>
        <div className={styles.title}>
          <Image
            className={classNames(styles.goldenOwl, styles.firstOwl)}
            src={GoldenOwl}
            alt="Golden owl decoration 1"
          />
          <Image
            className={classNames(styles.goldenOwl, styles.secondOwl)}
            src={GoldenOwl}
            alt="Golden owl decoration 2"
          />
          <Image
            className={classNames(styles.goldenOwl, styles.thirdOwl)}
            src={GoldenOwl}
            alt="Golden owl decoration 3"
          />
          <Image
            className={classNames(styles.goldenOwl, styles.fourthOwl)}
            src={GoldenOwl}
            alt="Golden owl decoration 4"
          />
          <Image
            className={classNames(styles.goldenOwl, styles.fifthOwl)}
            src={GoldenOwl}
            alt="Golden owl decoration 5"
          />
          <p>CONGRATULATIONS</p>
        </div>
        <p className={styles.description}>
          Congratulations, you're now part of the Digital Odyssey community of finishers. Download your <br />{' '}
          certificate and post-it on our internal network Workplace
        </p>
        <Image className={styles.certificateImage} src={Certificate} alt="Certificate" />
        <button className={styles.downloadButton} type="button">
          DOWNLOAD YOUR CERTIFICATE
        </button>
      </div>
    </GameLayout>
  );
};

export default TimelessTundraPage;
