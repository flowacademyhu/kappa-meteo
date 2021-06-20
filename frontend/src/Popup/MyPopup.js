import { Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import DetailsButton from '../Button/DetailsButton';

export default function MyPopup({ station }) {
  return (
    <Popup>
      {station.name} GPS:-{station.latitude},-{station.longitude}
      <DetailsButton
        text="Részletek"
      ></DetailsButton>
    </Popup>
  );
}
