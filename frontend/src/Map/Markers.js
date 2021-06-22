import React from 'react';
import MyPopup from '../Popup/MyPopup.js';
import RadarIcon from '../Icon/Radaricon';
import { Marker } from 'react-leaflet';

export default function Markers({ coordinates }) {
  return (
    <>
      {coordinates
        .filter(
          (coordinate) =>
            coordinate.latitude != null && coordinate.longitude != null
        )
        .map((coordinate) => (
          <Marker
            key={coordinate.id}
            name={coordinate.name}
            position={[coordinate.longitude, coordinate.latitude]}
            icon={RadarIcon}
          >
            <MyPopup station={coordinate}></MyPopup>
          </Marker>
        ))}
    </>
  );
}
