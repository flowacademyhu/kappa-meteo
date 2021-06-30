import StationPopup from './StationPopup.js';
import { Marker } from 'react-leaflet';
import RadarIcon from '../Icon/Radaricon';

export default function Markersmapping({ coordinate }) {
  return (
    <Marker
      name={coordinate.name}
      position={[coordinate.latitude, coordinate.longitude]}
      icon={RadarIcon}
    >
      <StationPopup station={coordinate}></StationPopup>
    </Marker>
  );
}
