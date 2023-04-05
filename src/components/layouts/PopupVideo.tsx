import React from 'react';
import Image from 'next/image';

import styles from './PopupVideo.module.scss';

const PopupVideo =
  ({ videoUrl, onClick, closeIcon }: { videoUrl: string, onClick: () => void, closeIcon: typeof import('*.svg') }) => (
    <div className={styles.container}>
      <div className={styles.iframeContainer}>
        <button onClick={onClick} className={styles.closeButton} type="button">
          <Image width={30} height={30} src={closeIcon} alt="" />
        </button>
        <iframe
          width="100%"
          height="100%"
          src={videoUrl}
          title="Sustainability Progress Report 2020-2023 - KERING"
          allow="accelerometer; clipboard-write; encrypted-media;
          gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
);

export default PopupVideo;
