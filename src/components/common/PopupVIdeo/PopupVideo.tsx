import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import styles from './PopupVideo.module.scss';

const PopupVideo = ({ onClick, closeIcon }: { onClick: () => void; closeIcon: typeof import('*.svg') }) => (
  <div className={styles.container}>
    <div className={styles.iframeContainer}>
      <button onClick={onClick} className={styles.closeButton} type="button">
        <Image width={30} height={30} src={closeIcon} alt="Close Popup Button" />
      </button>
      <video width="100%" height="100%" controls>
        <source src="/static/teaser_kering_serious_game_2023 (720p).mp4" type="video/mp4" />
      </video>
    </div>
  </div>
);

export default PopupVideo;
