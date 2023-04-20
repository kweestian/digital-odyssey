/* eslint-disable max-len */
import { SVGOverlay, useMap } from 'react-leaflet';
import { LatLngBoundsExpression } from 'leaflet';

import styles from '../CustomMap.module.scss';
import 'leaflet/dist/leaflet.css';

const MapRegion = ({ children }: { children: React.ReactNode }) => {
  const map = useMap();
  const creativityCoastBounds: LatLngBoundsExpression = [
    [0, 0],
    [1080, 1920],
  ];

  const onClickHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <SVGOverlay interactive className={styles.creativityCoastContainer} bounds={creativityCoastBounds}>
      <a className={styles.creativityCoast} onClick={onClickHandler}>
        {children}
      </a>
    </SVGOverlay>
  );
};

export default MapRegion;
