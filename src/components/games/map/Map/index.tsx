/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { useGlobalState } from '@/contexts/global';
import styles from './Map.module.scss';
import { ExperiencePictos, MapBackground } from './components';

interface Props {
  zoomImageTrigger: (regionName: string) => void;
  customMap: CustomMap;
  zoom: number;
}

const Map = ({ customMap, zoomImageTrigger, zoom }: Props) => {
  const landContinentRef = useRef(null);

  const [activeRegion, setActiveRegion] = useState<Region['regionKey'] | ''>();
  const [forceActiveRegion, setForceActiveRegion] = useState<Region['regionKey'] | ''>();
  const showIcon = zoom >= 3;

  useEffect(() => {
    if (!showIcon) {
      setActiveRegion('');
      setForceActiveRegion('');
    }
  }, [zoom, setActiveRegion, setForceActiveRegion, showIcon]);

  const onClickActions = useCallback(
    (regionKey: Region['regionKey']) => {
      setForceActiveRegion(regionKey);
      zoomImageTrigger(regionKey);
      // if (!isPanning) {
      //   setshowIcon(true);
      // }
    },
    [zoomImageTrigger],
  );

  const { dispatch } = useGlobalState();

  // useClickOutSide(landContinentRef, () => {
  //   zoomImageTrigger('seaOfSustainability');
  // });

  return (
    <div className="w-full h-full">
      <MapBackground>
        {/* first, draw all regions */}
        <g ref={landContinentRef}>
          {customMap.map((region) => {
            const { regionKey, color, drawing, available, filColour, customElement: CustomElement } = region;

            const isRegionActive = available && (forceActiveRegion === regionKey || activeRegion === regionKey);

            return (
              <Fragment key={`region=${regionKey}`}>
                {CustomElement ? (
                  <CustomElement />
                ) : (
                  <a
                    onClick={() => onClickActions(regionKey)}
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

            if (!available) {
              return (
                <a
                  key={`unavailable-${regionKey}`}
                  onClick={() => onClickActions(regionKey)}
                  style={{ cursor: 'pointer' }}
                  className="z-10"
                >
                  <g>
                    <text
                      className={styles.region__title}
                      x={region.title.coordinates.x}
                      y={region.title.coordinates.y}
                      style={{ fill: 'lightgray', opacity: 0.45, fontWeight: '400', fontSize: '1.6rem' }}
                      textAnchor="middle"
                    >
                      {region.title.textParts.map((text) => (
                        <tspan x={region.title.coordinates.x} dy="1.2em" key={text}>
                          {text}
                        </tspan>
                      ))}
                    </text>
                    <image
                      x={regionOwl.x}
                      y={regionOwl.y}
                      width="100"
                      height="50"
                      style={{ opacity: '0.6' }}
                      xlinkHref="/static/image/map/picto/lock-svgrepo-com.svg"
                    />
                  </g>
                </a>
              );
            }

            if (showIcon) {
              return (
                <g className="z-20" key={`pictos-${regionKey}`}>
                  <ExperiencePictos experiences={experiences} regionKey={regionKey} />
                </g>
              );
            }

            return (
              <a
                key={`pictos-${regionKey}`}
                onClick={() => onClickActions(regionKey)}
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
                      x={regionOwl.x}
                      onClick={() => {
                        if (region.isComplete) {
                          dispatch({
                            type: 'SET_ADDITIONAL_RESOURCES_POPIN',
                            payload: {
                              title: region.title.textParts.join(' '),
                              description: 'Ceci est une description',
                              additionalResources: region.experiences
                                .filter(({ keyLearning }) => keyLearning?.additionalRessources !== undefined)
                                .map(({ keyLearning }) => [...keyLearning.additionalRessources])
                                .flat(),
                            },
                          });
                        }
                      }}
                      y={regionOwl.y}
                      width="110"
                      height="60"
                      style={{ overflow: 'visible' }}
                      xlinkHref={
                        isRegionComplete
                          ? `/static/image/owls/gif/${regionKey}.gif`
                          : `/static/image/owls/icons/${regionKey}.svg`
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
