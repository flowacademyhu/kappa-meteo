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
            !isNaN(parseFloat(coordinate.latitude)) && !isNaN(parseFloat(coordinate.longitude))
        )
        .map((coordinate) => (
          <Marker
            key={coordinate.id}
            name={coordinate.name}
            position={[parseFloat(coordinate.longitude), parseFloat(coordinate.latitude)]}
            icon={RadarIcon}
          >
            <MyPopup
              name={coordinate.name}
              latitude={coordinate.latitude}
              longitude={coordinate.longitude}
            ></MyPopup>
          </Marker>
        ))}
    </>
  );
}
