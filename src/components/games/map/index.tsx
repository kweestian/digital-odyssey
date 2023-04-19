import { ImageOverlay, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import styles from './CustomMap.module.scss';

const CustomMap = () => (
  <MapContainer
    crs={L.CRS.Simple}
    center={[0, -130]}
    zoom={0}
    attributionControl={false}
    zoomControl={false}
    dragging={false}
    doubleClickZoom={false}
    style={{ height: '100%', width: '100%' }}
  >
    <ImageOverlay
      url="/static/image/map/full-map.png"
      bounds={[
        [-450, -850],
        [440, 600],
      ]}
      className={styles.imageContainer}
    />
  </MapContainer>
);

export default CustomMap;
