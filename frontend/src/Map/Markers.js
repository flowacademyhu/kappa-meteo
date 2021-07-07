import React from 'react';
import MarkerWithPopup from './MarkerWithPopup.js';

export default function Markers({ stations }) {
  return (
    <div>
      {stations
        .filter(
          (station) => station.latitude != null && station.longitude != null
        )
        .map((station) => (
          <MarkerWithPopup key={station.id} station={station}></MarkerWithPopup>
        ))}
    </div>
  );
}
