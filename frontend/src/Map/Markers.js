import React from 'react';
import MarkerWithPopup from './MarkerWithPopup.js';

export default function Markers({ stations }) {
  return (
    <div>
      {stations.map((station) => (
        <MarkerWithPopup key={station.id} station={station}></MarkerWithPopup>
      ))}
    </div>
  );
}
