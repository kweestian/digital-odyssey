import { NextPage } from 'next';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from 'react-zoom-pan-pinch';

import styles from '@/styles/map.module.scss';
import { AdditionalResourcesPopin, GameCard, GameLayout, Map } from '@/components';
import useWindowSize from '@/hooks/useWindowSize';
import { useGlobalState } from '@/contexts/global';
import { useMapData } from '@/hooks';
import { useRouter } from 'next/router';
import useURLParams from '@/hooks/useUrlParams';

const DEFAULT_REGION_ZOOM = 3;

const MapPage: NextPage = () => {
  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);

  const { getItem, setItems, removeItem, clear } = useURLParams();

  const [isPanning, setIsPanning] = useState(false);

  const { width } = useWindowSize();

  const initialScale = width && width < 1200 ? 1.2 : 1.5;
  const [zoom, setZoom] = useState(initialScale);

  const zoomToImage = useCallback(
    (regionName: string, overrideZoom?: number) => {
      if (transformComponentRef.current && !isPanning) {
        const { zoomToElement } = transformComponentRef.current;
        const newZoom = overrideZoom || DEFAULT_REGION_ZOOM;
        setZoom(newZoom);
        zoomToElement(regionName, newZoom);

        if (regionName === 'backgroundAnchor') {
          clear();
        }
        // } else {
        //   setItems([{ key: 'regionKey', value: regionName }]);
        // }
      }
    },
    [isPanning, clear],
  );

  const { data: CustomMap } = useMapData();

  const router = useRouter();
  const {
    state: { additionalResourcesPopinState },
    dispatch,
  } = useGlobalState();

  // const resetZoom = useCallback(() => {
  //   transformComponentRef.current?.resetTransform();
  // }, []);
  const currentRegionKey = getItem('regionKey');

  const currentExperienceKey = getItem('experienceKey');

  useEffect(() => {
    const getCurrentRegionKey = getItem('regionKey');
    if (transformComponentRef.current && getCurrentRegionKey && !Array.isArray(getCurrentRegionKey)) {
      const { zoomToElement } = transformComponentRef.current;
      zoomToElement(getCurrentRegionKey, DEFAULT_REGION_ZOOM);
    }

    // zoomToImage(currentRegionKey);
  }, [getItem]);

  useEffect(() => {
    // if (currentRegionKey && !Array.isArray(currentRegionKey)) {
    //   transformComponentRef.current?.zoomToElement(currentRegionKey, zoom);
    // } else {
    transformComponentRef.current?.zoomToElement('backgroundAnchor', initialScale);
    // }
  }, [transformComponentRef, initialScale]);

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      dispatch({ type: 'CLOSE_EXPERIENCE' });
      dispatch({ type: 'CLOSE_ADDITONAL_RESOURCES_POPIN' });
    });
  }, [router, dispatch]);

  const currentOpenedExperience = useMemo(
    () =>
      CustomMap.find(({ regionKey }) => regionKey === currentRegionKey)?.experiences.find(
        ({ key }) => key === currentExperienceKey,
      ),
    [CustomMap, currentExperienceKey, currentRegionKey],
  );

  return (
    <GameLayout>
      {currentOpenedExperience && (
        <GameCard
          experience={currentOpenedExperience}
          isOpen
          onClose={() => {
            removeItem('experienceKey');
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
          initialPositionY={2000}
          minScale={1.2}
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
