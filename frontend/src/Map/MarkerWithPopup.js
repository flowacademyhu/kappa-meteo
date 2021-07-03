import StationPopup from './StationPopup.js';
import { Marker } from 'react-leaflet';
import RadarIcon from '../Icon/Radaricon';

export default function MarkerWithPopup({ station, stationId }) {
  return (
    <Marker
      name={station.name}
      position={[station.latitude, station.longitude]}
      icon={RadarIcon}
    >
      <StationPopup stationId={stationId} station={station}></StationPopup>
    </Marker>
  );
}
