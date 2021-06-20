import { Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import DetailsButton from '../Button/DetailsButton';

export default function MyPopup({ latitude, longitude, name }) {
  return (
    <Popup>
      {name} GPS:-{latitude},-{longitude}
      <DetailsButton text="Részletek"></DetailsButton>
    </Popup>
  );
}
