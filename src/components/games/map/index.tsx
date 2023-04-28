/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import styles from './Map.module.scss';
import BG from './background';

interface Props {
  zoomImageTrigger: (regionName: string) => void;
  customMap: CustomMap;
  zoom: number;
}

const CreativityCoast = ({ customMap, zoomImageTrigger, zoom }: Props) => {
  const showIcon = zoom >= 3.5;

  const landContinentRef = useRef(null);

  const [activeRegion, setActiveRegion] = useState<Region['regionKey'] | ''>();
  const [forceActiveRegion, setForceActiveRegion] = useState<Region['regionKey'] | ''>();
  useEffect(() => {
    if (!showIcon) {
      setActiveRegion('');
      setForceActiveRegion('');
    }
  }, [zoom, setActiveRegion, setForceActiveRegion]);

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

  // useClickOutSide(landContinentRef, () => {
  //   zoomImageTrigger('seaOfSustainability');
  // });

  return (
    <div className="w-full h-full">
      <BG>
        {/* first, draw all regions */}
        <g ref={landContinentRef}>
          {customMap.map((region) => {
            const { regionKey, color, drawing, available, filColour, customElement: CustomElement } = region;

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
                        opacity: forceActiveRegion === regionKey || activeRegion === regionKey ? 0.75 : 0,
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
            const { regionKey, regionOwl, available } = region;

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
                      style={{ fill: region.color, fontWeight: '400', fontSize: '1.8rem' }}
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
                      width="150"
                      height="84.3"
                      style={{ overflow: 'visible' }}
                      xlinkHref="/static/image/map/picto/lock-svgrepo-com.svg"
                    />
                  </g>
                </a>
              );
            }
            return (
              <Fragment key={regionKey}>
                {!showIcon && (
                  <a onClick={() => onClickActions(regionKey)} style={{ cursor: 'pointer' }} className="z-10">
                    <g>
                      <text
                        className={styles.region__title}
                        x={region.title.coordinates.x}
                        y={region.title.coordinates.y}
                        style={{ fill: region.color, fontWeight: '400', fontSize: '1.8rem' }}
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
                          y={regionOwl.y}
                          width="150"
                          height="84.3"
                          style={{ overflow: 'visible' }}
                          xlinkHref={regionOwl.regionOwlGif}
                        />
                      )}
                    </g>
                  </a>
                )}
                {showIcon && (
                  <g className="z-20" key={`pictos-${regionKey}`}>
                    <image
                      x="290"
                      y="370"
                      width="50"
                      height="50"
                      xlinkHref="/static/image/map/picto/PICTO_POSITION.svg"
                    />
                    <image
                      x="310"
                      y="180"
                      width="50"
                      height="50"
                      xlinkHref="/static/image/map/picto/PICTO_POSITION.svg"
                    />
                    <image
                      x="250"
                      y="260"
                      width="50"
                      height="50"
                      xlinkHref="/static/image/map/picto/PICTO_POSITION.svg"
                    />
                  </g>
                )}
              </Fragment>
            );
          })}
        </g>
      </BG>
    </div>
  );
};

export default CreativityCoast;
