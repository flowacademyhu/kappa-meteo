import React from 'react';
import StationPopup from './StationPopup.js';
import RadarIcon from '../Icon/Radaricon';
import { Marker } from 'react-leaflet';

export default function Markers({ coordinates }) {
  return (
    <div>
      {coordinates
        .filter(
          (coordinate) =>
            coordinate.latitude != null && coordinate.longitude != null
        )
        .map((coordinate) => (
          <Marker
            key={coordinate.id}
            name={coordinate.name}
            position={[coordinate.latitude, coordinate.longitude]}
            icon={RadarIcon}
          >
            <StationPopup station={coordinate}></StationPopup>
          </Marker>
        ))}
    </div>
  );
}
