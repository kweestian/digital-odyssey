import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

import CloseIcon from '@/image/CloseIcon.svg';
// import PlayIcond from '@/image/rules/video-play.svg';

import styles from './PopupVideo.module.scss';

const PopupVideo = ({ onClick }: { onClick: () => void }) => {
  const vidRef = useRef<HTMLVideoElement>(null);
  // const [videoPlaying, setVideoPlaying] = useState(false);
  useEffect(() => {
    vidRef.current?.play();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.popinContainer}>
        <button onClick={onClick} className={styles.closeButton} type="button">
          <Image width={30} height={30} src={CloseIcon} alt="Close Popup Button" />
        </button>
        {/* {!videoPlaying && (
          <button onClick={() => vidRef.current?.play()} className={styles.playButton} type="button">
            <Image width={30} height={30} src={PlayIcond} alt="Play Video" />
          </button>
        )} */}
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          // onPlay={() => setVideoPlaying(true)}
          ref={vidRef}
          onEnded={() => {
            // setVideoPlaying(false);
            onClick();
          }}
          controls
        >
          <source src="/static/video/teaser_kering_serious_game_2023.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default PopupVideo;
