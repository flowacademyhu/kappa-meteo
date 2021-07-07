import StationPopup from './StationPopup.js';
import { Marker } from 'react-leaflet';
import L from 'leaflet';

export default function MarkerWithPopup({ station }) {
  return (
    <Marker
      name={station.name}
      position={[station.latitude, station.longitude]}
      icon={
        new L.icon({
          iconUrl: station.icon,
          iconSize: [130, 130],
        })
      }
    >
      <StationPopup station={station}></StationPopup>
    </Marker>
  );
}
