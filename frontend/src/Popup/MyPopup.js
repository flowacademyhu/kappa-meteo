import { Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MyPopup({ latitude, longitude, name }) {
  return (
    <Popup>
      {name} "GPS":{latitude},{longitude}
    </Popup>
  );
}
