import React from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player';

import styles from './PopupVideo.module.scss';

const PopupVideo = ({
  videoUrl,
  onClick,
  closeIcon,
}: {
  videoUrl: string;
  onClick: () => void;
  closeIcon: typeof import('*.svg');
}) => (
  <div className={styles.container}>
    <div className={styles.iframeContainer}>
      <button onClick={onClick} className={styles.closeButton} type="button">
        <Image width={30} height={30} src={closeIcon} alt="Close Popup Button" />
      </button>
      <ReactPlayer url={videoUrl} width="100%" height="100%" controls />
    </div>
  </div>
);

export default PopupVideo;
