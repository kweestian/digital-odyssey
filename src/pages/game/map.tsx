import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { MapContainer } from 'react-leaflet';

const CustomMap = dynamic(() => import('@/components/games/map'), { ssr: false });
const Map: NextPage = () => <CustomMap />;

export default Map;
