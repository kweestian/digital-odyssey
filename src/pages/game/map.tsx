import { NextPage } from 'next';
import { useCallback, useEffect, useRef, useState } from 'react';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from 'react-zoom-pan-pinch';

import styles from '@/styles/map.module.scss';
import { AdditionalResourcesPopin, Button, GameCard, GameLayout, Loader, Map } from '@/components';
import useWindowSize from '@/hooks/useWindowSize';
import { useGlobalState } from '@/contexts/global';
import { useMapData } from '@/hooks';
import { useRouter } from 'next/router';

const DEFAULT_REGION_ZOOM = 3;

const MapPage: NextPage = () => {
  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);

  const [isPanning, setIsPanning] = useState(false);

  const { width } = useWindowSize();

  const initialScale = width && width < 1200 ? 0.4 : 1.7;
  const [zoom, setZoom] = useState(initialScale);

  const zoomToImage = useCallback(
    (regionName: string, overrideZoom?: number) => {
      if (transformComponentRef.current && !isPanning) {
        const { zoomToElement } = transformComponentRef.current;
        setZoom(DEFAULT_REGION_ZOOM);
        zoomToElement(regionName, overrideZoom || DEFAULT_REGION_ZOOM);
      }
    },
    [isPanning],
  );

  const { data: CustomMap } = useMapData();

  const router = useRouter();
  const {
    state: { experience: currentOpenedExperience, additionalResourcesPopinState },
    dispatch,
  } = useGlobalState();

  // const resetZoom = useCallback(() => {
  //   transformComponentRef.current?.resetTransform();
  // }, []);

  useEffect(() => {
    transformComponentRef.current?.zoomToElement('backgroundAnchor', initialScale);
  }, [transformComponentRef, width, initialScale]);

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      dispatch({ type: 'CLOSE_EXPERIENCE' });
      dispatch({ type: 'CLOSE_ADDITONAL_RESOURCES_POPIN' });
    });
  }, [router, dispatch]);

  return (
    <GameLayout>
      {currentOpenedExperience && (
        <GameCard
          experience={currentOpenedExperience}
          isOpen
          onClose={() => {
            dispatch({ type: 'CLOSE_EXPERIENCE' });
            // resetZoom();
          }}
        />
      )}
      {additionalResourcesPopinState && (
        <AdditionalResourcesPopin
          title={additionalResourcesPopinState.title}
          description={additionalResourcesPopinState.description}
          additionalResources={additionalResourcesPopinState.additionalResources}
          onClose={() => dispatch({ type: 'CLOSE_ADDITONAL_RESOURCES_POPIN' })}
        />
      )}
      <div className={styles.mapContainer}>
        <TransformWrapper
          centerOnInit
          // eslint-disable-next-line react/jsx-props-no-spreading
          // {...initialValues}
          limitToBounds={false}
          // initialPositionX={5000}
          ref={transformComponentRef}
          onZoom={(evt) => setZoom(evt.state.scale)}
          onPanning={() => setIsPanning(true)}
          onPanningStop={() =>
            setTimeout(() => {
              setIsPanning(false);
            }, 1000)
          }
        >
          <TransformComponent>
            <div className={styles.regionsContainer}>
              <Map zoom={zoom} customMap={CustomMap} zoomImageTrigger={zoomToImage} initialScale={initialScale} />
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>
    </GameLayout>
  );
};

export default MapPage;
