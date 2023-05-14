import React from 'react';
import Image from 'next/image';

import CloseIcon from '@/image/CloseIcon.svg';

import styles from './PopupVideo.module.scss';

const PopupVideo = ({ onClick }: { onClick: () => void }) => (
  <div className={styles.container}>
    <div className={styles.popinContainer}>
      <button onClick={onClick} className={styles.closeButton} type="button">
        <Image width={30} height={30} src={CloseIcon} alt="Close Popup Button" className="ignore-click" />
      </button>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video width="100%" height="100%" controls>
        <source src="/static/teaser_kering_serious_game_2023 (720p).mp4" type="video/mp4" />
      </video>
    </div>
  </div>
);

export default PopupVideo;
