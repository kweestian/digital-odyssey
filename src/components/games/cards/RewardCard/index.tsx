import React, { useRef, useState } from 'react';
import classNames from 'classnames';

import PopinCard from '@/components/common/PopinCard';
import { KeyLearningsContent } from '@/components/common';
import styles from './RewardCard.module.scss';

interface RewardCardProps {
  content: string;
  isActive?: boolean;
  additionalRessources?: AdditionalResources[];
  videoUrl: string;
  color: Region['color'];
  // blurUrl;
}

const RewardCard = ({ content, isActive, additionalRessources, videoUrl, color }: RewardCardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      {isOpen && isActive && (
        <PopinCard onClick={() => setIsOpen(false)}>
          <KeyLearningsContent videoUrl={videoUrl} content={content} additionalRessources={additionalRessources} />
        </PopinCard>
      )}
      <div className={classNames(styles.container, { [styles.isNotActive]: !isActive })}>
        <button onClick={() => isActive && setIsOpen(true)} type="button">
          <div
            className={styles.videoContainer}
            style={{ backgroundColor: color }}
            onMouseEnter={() => isActive && videoRef.current?.play()}
            onMouseLeave={() => isActive && videoRef.current?.pause()}
          >
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video ref={videoRef} muted controls={false} width={96.03} height="auto">
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
        </button>
      </div>
    </>
  );
};

export default RewardCard;
