import { Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import DetailsButton from '../Button/DetailsButton';

export default function StationPopup({ station }) {
  return (
    <Popup>
      {station.name}
      <DetailsButton text="Részletek"></DetailsButton>
    </Popup>
  );
}
