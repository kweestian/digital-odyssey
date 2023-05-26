import { NextPage } from 'next';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from 'react-zoom-pan-pinch';
import { useAtom } from 'jotai';
import { interactionAtom } from '@/components/games/map/GameCard/components/GamePoppinContent/atom';

import { RegionalResourcesPopin, GameCard, GameLayout, Map } from '@/components';
import useWindowSize from '@/hooks/useWindowSize';
import { useGlobalState } from '@/contexts/global';
import { useMapData, useUrlParams } from '@/hooks';
import { useRouter } from 'next/router';
import styles from './map.module.scss';

const DEFAULT_REGION_ZOOM = 3;

const MapPage: NextPage = () => {
  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);
  const isFirst = useRef(true);

  const { getUrlParam, setUrlParam, removeUrlParam } = useUrlParams();

  const [, setInteractionType] = useAtom(interactionAtom);

  const currentExperienceKey = getUrlParam('experienceKey');

  const currentRegionKey = getUrlParam('regionKey');

  const [isPanning, setIsPanning] = useState(false);

  const { width } = useWindowSize();

  const initialScale = width && width < 1200 ? 1.2 : 1.6;
  const [zoom, setZoom] = useState(initialScale);

  const zoomToImage = useCallback(
    (regionName: string, overrideZoom?: number) => {
      if (transformComponentRef.current && !isPanning) {
        const { zoomToElement } = transformComponentRef.current;
        const newZoom = overrideZoom || DEFAULT_REGION_ZOOM;
        if (regionName === 'backgroundAnchor') {
          removeUrlParam('regionKey');
        } else {
          setUrlParam('regionKey', regionName);
        }

        setZoom(newZoom);
        zoomToElement(regionName, newZoom);
      }
    },
    [isPanning, setUrlParam, removeUrlParam],
  );

  const { data: CustomMap } = useMapData();

  const router = useRouter();
  const {
    state: { regionalResourcesPopinState },
    dispatch,
  } = useGlobalState();

  // const resetZoom = useCallback(() => {
  //   transformComponentRef.current?.resetTransform();
  // }, []);
  // const currentRegionKey = getItem('regionKey');

  useEffect(() => {
    if (transformComponentRef.current && currentRegionKey && !Array.isArray(currentRegionKey)) {
      const { zoomToElement } = transformComponentRef.current;
      zoomToElement(currentRegionKey, DEFAULT_REGION_ZOOM);
    }

    // zoomToImage(currentRegionKey);
  }, [currentRegionKey]);

  useEffect(() => {
    // if (currentRegionKey && !Array.isArray(currentRegionKey)) {
    //   transformComponentRef.current?.zoomToElement(currentRegionKey, zoom);
    // } else {
    if (isFirst) {
      transformComponentRef.current?.zoomToElement('backgroundAnchor', initialScale);
    }
    // }
  }, [transformComponentRef, initialScale]);

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      // dispatch({ type: 'CLOSE_EXPERIENCE' });
      if (!router.asPath.startsWith('/game/map')) {
        dispatch({ type: 'CLOSE_ADDITONAL_RESOURCES_POPIN' });
        setInteractionType(null);
      }
    });
  }, [router, dispatch, setInteractionType]);

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
            if (currentRegionKey) {
              zoomToImage(currentRegionKey);
            }
            removeUrlParam('experienceKey');
            // resetZoom();
          }}
        />
      )}
      {regionalResourcesPopinState && (
        <RegionalResourcesPopin
          regionKey={regionalResourcesPopinState.regionKey}
          regionalResources={regionalResourcesPopinState.regionalResources}
          onClose={() => dispatch({ type: 'CLOSE_ADDITONAL_RESOURCES_POPIN' })}
        />
      )}
      <div className={styles.mapContainer}>
        <TransformWrapper
          centerOnInit
          maxPositionX={500}
          maxPositionY={500}
          ref={transformComponentRef}
          maxScale={4}
          minScale={initialScale}
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
