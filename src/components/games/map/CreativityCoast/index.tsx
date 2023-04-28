/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */

import { useCallback, useState } from 'react';
import styles from './Map.module.scss';
import BG from './background';

interface CreativityCoastProps {
  zoomImageTrigger: (regionName: string) => void;
  id: string;
  customMap: CustomMap;
  isPanning: boolean;
}

const CreativityCoast = ({ customMap, zoomImageTrigger, id, isPanning }: CreativityCoastProps) => {
  const [markerVisibility, setMarkerVisibility] = useState<boolean>(false);

  const onClickActions = useCallback(
    (regionKey: string) => {
      zoomImageTrigger(regionKey);
      if (!isPanning) {
        setMarkerVisibility(true);
      }
    },
    [isPanning, zoomImageTrigger],
  );

  return (
    // <svg
    //   viewBox="-407.88 -210.62 1070.648 804.475"
    //   fill="transparent"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className="w-full h-full"
    // >
    <div className="w-full h-full">
      <BG />
    </div>
    // // {/* {customMap.map((region) => {
    //   const { regionKey, color, drawing, regionOwl, available, filColour } = region;

    //   return (
    //     <a onClick={() => onClickActions(regionKey)} style={{ cursor: 'pointer' }} key={regionKey}>
    //       <path d={drawing} stroke={color} fill={filColour} strokeWidth="4" strokeMiterlimit="10" id={regionKey} />
    //       {!markerVisibility && (
    //         <g>
    //           <image
    //             x={regionOwl.x}
    //             y={regionOwl.y}
    //             width="150"
    //             height="84.3"
    //             style={{ overflow: 'visible' }}
    //             xlinkHref={regionOwl.regionOwlGif}
    //           />
    //         </g>
    //       )}
    //       {markerVisibility && (
    //         <g>
    //           <image x="600" y="370" width="150" height="50" xlinkHref="/static/image/map/picto/PICTO_POSITION.svg" />
    //           <image x="650" y="450" width="150" height="50" xlinkHref="/static/image/map/picto/PICTO_POSITION.svg" />
    //           <image x="580" y="550" width="150" height="50" xlinkHref="/static/image/map/picto/PICTO_POSITION.svg" />
    //         </g>
    //       )}
    //     </a>
    //   );
    // })} */}
    // </svg>
  );
};

export default CreativityCoast;
