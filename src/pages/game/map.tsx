import { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from 'react-zoom-pan-pinch';

import CreativityCoast from '@/components/games/map/CreativityCoast';

import { CustomMap } from '@/data/games';

import styles from '@/styles/map.module.scss';
import { GameLayout } from '@/components';
import Image from 'next/image';
import useWindowSize from '@/hooks/useWindowSize';

const Map: NextPage = () => {
  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);

  const [isPanning, setIsPanning] = useState(false);

  const { width } = useWindowSize();

  const zoomToImage = (regionName: string) => {
    if (transformComponentRef.current) {
      const { zoomToElement } = transformComponentRef.current;
      // zoomToElement(regionName);
    }
    // open popin
  };

  useEffect(() => {
    transformComponentRef.current?.zoomToElement('backgroundAnchor', width && width < 1200 ? 0.4 : 1.2);
  }, [transformComponentRef, width]);

  return (
    <GameLayout>
      <div className={styles.mapContainer}>
        <TransformWrapper
          centerOnInit
          // eslint-disable-next-line react/jsx-props-no-spreading
          // {...initialValues}
          limitToBounds={false}
          ref={transformComponentRef}
          onPanningStart={(ref) => console.log(ref.state.positionX)}
          onPanningStop={(ref) => console.log(ref.state.positionX, ref.state.positionY, ref.state.scale)}
        >
          <TransformComponent>
            <div className={styles.regionsContainer}>
              <CreativityCoast
                isPanning={isPanning}
                customMap={CustomMap}
                zoomImageTrigger={zoomToImage}
                id="creativityCoast"
              />
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>
    </GameLayout>
  );
};

export default Map;
