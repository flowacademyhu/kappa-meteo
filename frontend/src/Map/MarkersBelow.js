import React from 'react';
import Markersmapping from './Markermapping';

const mainStation = [
  'Szeged',
  'ÉK_EBES',
  'OVF_Lajosmizse',
  'ÉD_POMÁZ',
  'ÉD_Gyõrszemere',
  'OVF_Vasszécseny',
  'DD_BALATONSZABADI',
  'OVF_Szederkény',
  'KÖ_MEZÕKÖVESD',
  'D_GYULA',
  'OVF_Demecser',
  'OVF_Nagykanizsa',
];

export default function MarkersBelow({ coordinates }) {
  return (
    <div>
      {coordinates
        .filter(
          (coordinate) =>
            coordinate.lat !== null && mainStation.includes(coordinate.name)
        )
        .map((coordinate) => (
          <Markersmapping key={coordinate.id} coordinate={coordinate} />
        ))}
    </div>
  );
}
