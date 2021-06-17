import { Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import DetailsButton from '../Button/DetailsButton';

export default function MyPopup({ latitude, longitude, name }) {
  return (
    <Popup>
      {name} GPS:-{latitude},-{longitude} 
      <DetailsButton type="btn btn-outline-success m-1" onClick={console.log("")} text="Részletek"></DetailsButton>
    </Popup>
  );
}
