import StationPopup from './StationPopup.js';
import { Marker } from 'react-leaflet';
import L from 'leaflet';
// import cloudyday2 from '../Icon/AnimateIcon/cloudy-day-2.svg';
// import cloudy from '../Icon/AnimateIcon/cloudy.svg';
// import day from '../Icon/AnimateIcon/day.svg';
// import rainy1 from '../Icon/AnimateIcon/rainy-1.svg';
// import rainy6 from '../Icon/AnimateIcon/rainy-6.svg';

// let icons = [cloudyday2, cloudy, day, rainy1, rainy6, day];

// const iconChooser = (icons) => {
//   let randomNum = Math.floor(Math.random() * 6);
//   return icons[randomNum];
// };

export default function MarkerWithPopup({ station, weatherIcons, index }) {
  return (
    <Marker
      name={station.name}
      position={[station.latitude, station.longitude]}
      icon={
        new L.icon({
          iconUrl: weatherIcons[index],
          iconSize: [130, 130],
        })
      }
    >
      <StationPopup station={station}></StationPopup>
    </Marker>
  );
}
