import { NextPage } from 'next';
import Image from 'next/image';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from 'react-zoom-pan-pinch';

import styles from '@/styles/map.module.scss';

import * as MapImage from '@/image/map/full-map.png';
import * as CreativityCoast from '@/image/map/creativity-coast.svg';
import { useRef } from 'react';

const Map: NextPage = () => {
  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);

  const zoomToImage = () => {
    if (transformComponentRef.current) {
      const { zoomToElement } = transformComponentRef.current;
      zoomToElement('creativityCoast');
    }
  };

  return (
    <div className={styles.mapContainer}>
      <TransformWrapper ref={transformComponentRef}>
        <TransformComponent>
          <Image src={MapImage} alt="" className={styles.mapImageContainer} />
          <div className={styles.svgRegions}>
            <button onClick={zoomToImage} type="button" className={styles.creativityCoastContainer}>
              <Image src={CreativityCoast} alt="" id="creativityCoast" className={styles.creativityCoast} />
            </button>
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default Map;
