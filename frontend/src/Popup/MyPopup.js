import { Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import DetailsButton from '../Button/DetailsButton';

export default function MyPopup({ station }) {
  return (
    <Popup>
      {station.name}
      <DetailsButton text="Részletek"></DetailsButton>
    </Popup>
  );
}
