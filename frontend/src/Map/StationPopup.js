import { Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import DetailsButton from './DetailsButton';
import { Link } from 'react-router-dom';

export default function StationPopup({ station, stationId }) {
  return (
    <Popup>
      {station.name}
      <Link to={`/historicdata/${stationId}`}>
        <DetailsButton text="Részletek"></DetailsButton>
      </Link>
    </Popup>
  );
}
