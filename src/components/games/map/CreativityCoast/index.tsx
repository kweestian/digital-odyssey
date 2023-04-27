/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */

import { useState } from 'react';

interface CreativityCoastProps {
  zoomImageTrigger: (regionName: string) => void;
  id: string;
  customMap: CustomMap;
}

const CreativityCoast = ({ customMap, zoomImageTrigger, id }: CreativityCoastProps) => {
  const [markerVisibility, setMarkerVisibility] = useState<boolean>(false);
  const onClickActions = (regionKey: string) => {
    zoomImageTrigger(regionKey);
    setMarkerVisibility(true);
  };

  return (
    <svg viewBox="0 0 984 703" fill="transparent" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      {customMap.map((region) => {
        const { regionKey, color, drawing, regionOwl, available } = region;

        return (
          <a onClick={() => onClickActions(regionKey)} style={{ cursor: 'pointer' }} key={regionKey}>
            <path d={drawing} stroke={color} strokeWidth="4" strokeMiterlimit="10" id={regionKey} />
            {!markerVisibility && (
              <g>
                <image
                  x={regionOwl.x}
                  y={regionOwl.y}
                  width="150"
                  height="84.3"
                  style={{ overflow: 'visible' }}
                  xlinkHref={regionOwl.regionOwlGif}
                />
              </g>
            )}
            {markerVisibility && (
              <g>
                <image x="600" y="370" width="150" height="50" xlinkHref="/static/image/map/picto/PICTO_POSITION.svg" />
                <image x="650" y="450" width="150" height="50" xlinkHref="/static/image/map/picto/PICTO_POSITION.svg" />
                <image x="580" y="550" width="150" height="50" xlinkHref="/static/image/map/picto/PICTO_POSITION.svg" />
              </g>
            )}
          </a>
        );
      })}
    </svg>
  );
};

export default CreativityCoast;
