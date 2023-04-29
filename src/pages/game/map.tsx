import { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from 'react-zoom-pan-pinch';

import Continent from '@/components/games/map';

import { CustomMap } from '@/data/regions';

import styles from '@/styles/map.module.scss';
import { GameCard, GameLayout } from '@/components';
import useWindowSize from '@/hooks/useWindowSize';
import { useExperience } from '@/contexts/experiences';

const DEFAULT_REGION_ZOOM = 3;

const Map: NextPage = () => {
  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);

  const [isPanning, setIsPanning] = useState(false);

  const { width } = useWindowSize();

  const initialScale = width && width < 1200 ? 0.4 : 1.2;
  const [zoom, setZoom] = useState(initialScale);

  const zoomToImage = (regionName: string) => {
    if (transformComponentRef.current && !isPanning) {
      const { zoomToElement } = transformComponentRef.current;
      setZoom(DEFAULT_REGION_ZOOM);
      zoomToElement(regionName, DEFAULT_REGION_ZOOM);
    }
  };

  useEffect(() => {
    transformComponentRef.current?.zoomToElement('backgroundAnchor', initialScale);
  }, [transformComponentRef, width, initialScale]);

  const {
    state: { experience },
    dispatch,
  } = useExperience();

  return (
    <GameLayout>
      <div className={styles.mapContainer}>
        {experience && (
          <GameCard experience={experience} isOpen onClose={() => dispatch({ type: 'CLOSE_EXPERIENCE' })} />
        )}
        <TransformWrapper
          centerOnInit
          // eslint-disable-next-line react/jsx-props-no-spreading
          // {...initialValues}
          limitToBounds={false}
          ref={transformComponentRef}
          onZoom={(evt) => setZoom(evt.state.scale)}
          onPanning={() => setIsPanning(true)}
          onPanningStop={() =>
            setTimeout(() => {
              setIsPanning(false);
            }, 500)
          }
        >
          <TransformComponent>
            <div className={styles.regionsContainer}>
              <Continent zoom={zoom} customMap={CustomMap} zoomImageTrigger={zoomToImage} />
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>
    </GameLayout>
  );
};

export default Map;
