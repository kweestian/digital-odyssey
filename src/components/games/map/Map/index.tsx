/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import { Fragment, useCallback, useRef, useState } from 'react';
import { useRouter } from 'next/router';

import { useGlobalState } from '@/contexts/global';
import { useUrlParams } from '@/hooks';
import { ExperiencePictos, MapBackground } from './components';

import styles from './Map.module.scss';

interface Props {
  zoomImageTrigger: (regionName: string, newZoom?: number) => void;
  customMap: CustomMap;
  zoom: number;
  initialScale: number;
}

const Map = ({ customMap, zoomImageTrigger, zoom, initialScale }: Props) => {
  const landContinentRef = useRef(null);
  const { getUrlParam, setUrlParam } = useUrlParams();
  const router = useRouter();

  const currentRegion = getUrlParam('regionKey');

  const [activeRegion, setActiveRegion] = useState<Region['regionKey'] | ''>();
  // const [forceActiveRegion, setForceActiveRegion] = useState<Region['regionKey'] | ''>();

  const showIcon = zoom >= 3;

  // useEffect(() => {
  //   if (!showIcon) {
  //     // setActiveRegion('');
  //     // removeUrlParam('regionKey');
  //   }
  // }, [showIcon, removeUrlParam]);

  const onClickActions = useCallback(
    (regionKey: Region['regionKey']) => {
      zoomImageTrigger(regionKey);
      // if (!isPanning) {
      //   setshowIcon(true);
      // }
    },
    [zoomImageTrigger],
  );

  const { dispatch } = useGlobalState();

  // useClickOutSide(
  //   landContinentRef,
  //   () => {
  //     zoomImageTrigger('backgroundAnchor', initialScale);
  //   },
  //   '.ignore-click',
  // );
  // seperate each regions

  return (
    <div>
      <MapBackground onClickOutSideContinent={() => zoomImageTrigger('backgroundAnchor', initialScale)}>
        {/* first, draw all regions */}
        <g ref={landContinentRef}>
          {customMap.map((region) => {
            const { regionKey, color, drawing, available, filColour, customElement: CustomElement } = region;

            const isRegionActive = available && (currentRegion === regionKey || activeRegion === regionKey);

            return (
              <Fragment key={`region=${regionKey}`}>
                {CustomElement ? (
                  <CustomElement />
                ) : (
                  <a
                    onClick={() => {
                      if (available && regionKey === 'timeless-tundra') {
                        router.push('/game/map/timeless-tundra?regionKey=timeless-tundra');
                      } else {
                        onClickActions(regionKey);
                      }
                    }}
                    onMouseEnter={() => setActiveRegion(regionKey)}
                    style={{ cursor: 'pointer' }}
                    key={regionKey}
                    className="z-10"
                  >
                    <path
                      d={drawing}
                      stroke={color}
                      fill={available ? filColour : 'gray'}
                      strokeWidth="1"
                      strokeMiterlimit="10"
                      id={regionKey}
                    />
                    <path
                      stroke={color}
                      // strokeMiterlimit={10}
                      strokeWidth={10}
                      // y={300}
                      style={{
                        filter: 'url(#contour)',
                        opacity: isRegionActive ? 0.75 : 0,
                        fill: 'transparent',
                      }}
                      d={drawing}
                    />
                  </a>
                )}
              </Fragment>
            );
          })}
          {/* then draw elements on top */}
          {customMap.map((region) => {
            const { regionKey, regionOwl, available, experiences, isComplete: isRegionComplete } = region;

            if (showIcon) {
              if (regionKey === 'timeless-tundra') {
                return (
                  <a
                    key={`pictos-${regionKey}`}
                    onClick={() => {
                      if (available) {
                        router.push('/game/map/timeless-tundra?regionKey=timeless-tundra');
                      } else {
                        onClickActions(regionKey);
                      }
                    }}
                    style={{ cursor: 'pointer' }}
                    className="z-10"
                  >
                    <g>
                      <text
                        className={styles.region__title}
                        x={region.title.coordinates.x}
                        y={region.title.coordinates.y}
                        style={{
                          fill: available ? region.color : 'lightgray',
                          fontWeight: '400',
                          fontSize: '1.6rem',
                          textTransform: 'uppercase',
                        }}
                        textAnchor="middle"
                      >
                        {region.title.textParts.map((text) => (
                          <tspan x={region.title.coordinates.x} dy="1.2em" key={text} style={{ paddingTop: '30px' }}>
                            {text}
                          </tspan>
                        ))}
                      </text>
                      {available ? (
                        <image
                          x={isRegionComplete ? Number(regionOwl.x) - 15 : regionOwl.x}
                          y={isRegionComplete ? Number(regionOwl.y) - 15 : regionOwl.y}
                          // width="110"
                          // height="60"
                          style={{ width: isRegionComplete ? 150 : 110, height: 'auto' }}
                          xlinkHref={
                            isRegionComplete
                              ? `/static/image/owls/gif/${regionKey}.gif`
                              : `/static/image/owls/3d/${regionKey}.svg`
                          }
                        />
                      ) : (
                        <image
                          x={Number(regionOwl.x) + 60}
                          y={Number(regionOwl.y) + 15}
                          width="100"
                          height="50"
                          style={{ opacity: '0.6' }}
                          xlinkHref="/static/image/map/picto/lock-svgrepo-com.svg"
                        />
                      )}
                    </g>
                  </a>
                );
              }
              return (
                <g className="z-20" key={`pictos-${regionKey}`}>
                  <ExperiencePictos experiences={experiences} regionKey={regionKey} />
                </g>
              );
            }

            if (!available) {
              return (
                <a
                  key={`unavailable-${regionKey}`}
                  // onClick={() => onClickActions(regionKey)}
                  style={{ cursor: 'pointer' }}
                  className="z-10"
                >
                  <g>
                    <text
                      className={styles.region__title}
                      x={region.title.coordinates.x}
                      y={region.title.coordinates.y}
                      style={{ fill: 'lightgray', opacity: 1, fontWeight: '400', fontSize: '1.6rem' }}
                      textAnchor="middle"
                    >
                      {region.title.textParts.map((text) => (
                        <tspan x={region.title.coordinates.x} dy="1.2em" key={text} style={{ padding: '30px' }}>
                          {text}
                        </tspan>
                      ))}
                    </text>
                    <image
                      x={Number(regionOwl.x) + 60}
                      y={Number(regionOwl.y) + 15}
                      width="100"
                      height="50"
                      style={{ opacity: '0.6' }}
                      xlinkHref="/static/image/map/picto/lock-svgrepo-com.svg"
                    />
                  </g>
                </a>
              );
            }

            return (
              <a
                key={`pictos-${regionKey}`}
                onClick={() => {
                  if (available && regionKey === 'timeless-tundra') {
                    router.push('/game/map/timeless-tundra?regionKey=timeless-tundra');
                  } else {
                    onClickActions(regionKey);
                  }
                }}
                style={{ cursor: 'pointer' }}
                className="z-10"
              >
                <g>
                  <text
                    className={styles.region__title}
                    x={region.title.coordinates.x}
                    y={region.title.coordinates.y}
                    style={{ fill: region.color, fontWeight: '400', fontSize: '1.6rem', textTransform: 'uppercase' }}
                    textAnchor="middle"
                  >
                    {region.title.textParts.map((text) => (
                      <tspan x={region.title.coordinates.x} dy="1.2em" key={text}>
                        {text}
                      </tspan>
                    ))}
                  </text>
                  {available && (
                    <image
                      x={isRegionComplete ? Number(regionOwl.x) - 15 : regionOwl.x}
                      onClick={(evt) => {
                        // so it doesnt trigger zoom
                        if (region.isComplete && regionKey !== 'timeless-tundra') {
                          evt.stopPropagation();

                          dispatch({
                            type: 'SET_ADDITIONAL_RESOURCES_POPIN',
                            payload: {
                              regionKey,
                              title: region.title.textParts.join(' '),
                              description: 'Ceci est une description',
                              regionalResources: region.regionalResources,
                            },
                          });
                          setUrlParam('regionKey', regionKey);
                        } else if (regionKey === 'timeless-tundra') {
                          router.push('/game/map/timeless-tundra?regionKey=timeless-tundra');
                        } else {
                          onClickActions(regionKey);
                        }
                      }}
                      y={isRegionComplete ? Number(regionOwl.y) - 15 : regionOwl.y}
                      // width="110"
                      // height="60"
                      style={{ width: isRegionComplete ? 150 : 110, height: 'auto' }}
                      xlinkHref={
                        isRegionComplete
                          ? `/static/image/owls/gif/${regionKey}.gif`
                          : `/static/image/owls/3d/${regionKey}.svg`
                      }
                    />
                  )}
                </g>
              </a>
            );
          })}
        </g>
      </MapBackground>
    </div>
  );
};

export default Map;
