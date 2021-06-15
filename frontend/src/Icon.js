import "./app.css";
import L from 'leaflet';

export default function Icon() {
    const myIcon = L.icon({
      iconUrl: require('./asdasdd.svg'),
      iconSize: [64,64],
      iconAnchor: [32, 64],
  });