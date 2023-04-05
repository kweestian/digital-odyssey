import React from 'react';

import styles from './PopupVideo.module.scss';

const PopupVideo = ({ videoUrl }: { videoUrl: string }) => {
  const test = 'test';

  return (
    <div className={styles.container}>
      <div className={styles.iframeContainer}>
        <iframe
          width="100%"
          height="100%"
          src={videoUrl}
          title="Sustainability Progress Report 2020-2023 - KERING"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default PopupVideo;
