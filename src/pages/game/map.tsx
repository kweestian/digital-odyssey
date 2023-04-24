import { NextPage } from 'next';
import { useRef } from 'react';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from 'react-zoom-pan-pinch';

import CreativityCoast from '@/components/games/map/CreativityCoast';
import LoyaltyLagoon from '@/components/games/map/LoyaltyLagoon';
import PlayfulPlains from '@/components/games/map/PlayfulPlains';
import VirtualValleys from '@/components/games/map/VirtualValleys';
import TimelessTundra from '@/components/games/map/TimelessTundra';

import styles from '@/styles/map.module.scss';

const Map: NextPage = () => {
  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);

  const zoomToImage = (regionName: string) => {
    if (transformComponentRef.current) {
      const { zoomToElement } = transformComponentRef.current;
      zoomToElement(regionName);
    }
  };

  return (
    <div className={styles.mapContainer}>
      <TransformWrapper ref={transformComponentRef}>
        <TransformComponent>
          <div className={styles.regionsContainer}>
            <div className={styles.creativityCoast}>
              <CreativityCoast zoomImageTrigger={() => zoomToImage('creativityCoast')} id="creativityCoast" />
            </div>
            <div className={styles.loyaltyLagoon}>
              <LoyaltyLagoon zoomImageTrigger={() => zoomToImage('loyaltyLagoon')} id="loyaltyLagoon" />
            </div>
            <div className={styles.playfulPlains}>
              <PlayfulPlains zoomImageTrigger={() => zoomToImage('playfulPlains')} id="playfulPlains" />
            </div>
            <div className={styles.virtualValleys}>
              <VirtualValleys zoomImageTrigger={() => zoomToImage('virtualValleys')} id="virtualValleys" />
            </div>
            <div className={styles.timelessTundra}>
              <TimelessTundra zoomImageTrigger={() => zoomToImage('timelessTundra')} id="timelessTundra" />
            </div>
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default Map;
