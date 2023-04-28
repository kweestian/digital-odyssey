import { NextPage } from 'next';
import { useRef } from 'react';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from 'react-zoom-pan-pinch';

import CreativityCoast from '@/components/games/map/CreativityCoast';

import { CustomMap } from '@/data/games';

import styles from '@/styles/map.module.scss';
import { GameLayout } from '@/components';

const Map: NextPage = () => {
  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);

  const zoomToImage = (regionName: string) => {
    if (transformComponentRef.current) {
      const { zoomToElement } = transformComponentRef.current;
      zoomToElement(regionName);
    }
    // open popin
  };

  return (
    <div className={styles.mapContainer}>
      <TransformWrapper ref={transformComponentRef}>
        <TransformComponent>
          <div className={styles.regionsContainer}>
            <CreativityCoast customMap={CustomMap} zoomImageTrigger={zoomToImage} id="creativityCoast" />
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default Map;
