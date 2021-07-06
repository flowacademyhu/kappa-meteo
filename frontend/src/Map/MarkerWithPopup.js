import StationPopup from './StationPopup.js';
import { Marker } from 'react-leaflet';
import L from 'leaflet';
import cloudyday2 from '../Icon/AnimateIcon/cloudy-day-2.svg';
import cloudy from '../Icon/AnimateIcon/cloudy.svg';
import day from '../Icon/AnimateIcon/day.svg';
import rainy1 from '../Icon/AnimateIcon/rainy-1.svg';
import rainy6 from '../Icon/AnimateIcon/rainy-6.svg';

let icons = [cloudyday2, cloudy, day, rainy1, rainy6, day];

const iconChooser = (icons) => {
  let randomNum = Math.floor(Math.random() * 6);
  return icons[randomNum];
};
const WeatherIcon = new L.icon({
  iconUrl: iconChooser(icons),
  iconSize: [64, 64],
});
const currentIcon = () => {
  return WeatherIcon;
};

export default function MarkerWithPopup({ station }) {
  return (
    <Marker
      name={station.name}
      position={[station.latitude, station.longitude]}
      icon={currentIcon()}
    >
      <StationPopup station={station}></StationPopup>
    </Marker>
  );
}
