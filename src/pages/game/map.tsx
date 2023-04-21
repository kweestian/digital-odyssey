import { NextPage } from 'next';
import Image from 'next/image';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from 'react-zoom-pan-pinch';

import styles from '@/styles/map.module.scss';

import * as CreativityCoast from '@/image/map/creativity-coast.svg';
import * as LoyaltyLagoon from '@/image/map/loyalty-lagoon.svg';
import * as PlayfulPlains from '@/image/map/playful-plains.svg';
import * as TimelessTundra from '@/image/map/timeless-tundra.svg';
import * as VirtualValleys from '@/image/map/virtual-valleys.svg';

import { useRef } from 'react';

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
          {/* <Image src={MapImage} alt="" className={styles.mapImageContainer} /> */}
          <div className={styles.regionsContainer}>
            <div className={styles.creativityCoastContainer}>
              <Image
                onClick={() => zoomToImage('creativityCoast')}
                src={CreativityCoast}
                alt=""
                id="creativityCoast"
                className={styles.creativityCoast}
              />
            </div>
            <div className={styles.loyaltyLagoonContainer}>
              <Image
                onClick={() => zoomToImage('loyaltyLagoon')}
                src={LoyaltyLagoon}
                alt=""
                id="loyaltyLagoon"
                className={styles.loyaltyLagoon}
              />
            </div>
            <div className={styles.playfulPlainsContainer}>
              <Image
                onClick={() => zoomToImage('playfulPlains')}
                src={PlayfulPlains}
                alt=""
                id="playfulPlains"
                className={styles.playfulPlains}
              />
            </div>
            <div className={styles.timelessTundraContainer}>
              <Image
                onClick={() => zoomToImage('timelessTundra')}
                src={TimelessTundra}
                alt=""
                id="timelessTundra"
                className={styles.timelessTundra}
              />
            </div>
            <div className={styles.virtualValleysContainer}>
              <Image
                onClick={() => zoomToImage('virtualValleys')}
                src={VirtualValleys}
                alt=""
                id="virtualValleys"
                className={styles.virtualValleys}
              />
            </div>
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default Map;
