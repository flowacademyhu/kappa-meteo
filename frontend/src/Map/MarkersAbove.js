import React from 'react';
import Markersmapping from './Markermapping';

export default function MarkersAbove({ coordinates }) {
  return (
    <div>
      {coordinates
        .filter(
          (coordinate) =>
            coordinate.latitude != null && coordinate.longitude != null
        )
        .map((coordinate) => (
          <Markersmapping key={coordinate.id} coordinate={coordinate} />
        ))}
    </div>
  );
}
