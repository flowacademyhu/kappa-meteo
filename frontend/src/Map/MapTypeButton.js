import React, { useState, useEffect } from 'react';

import { LayersControl, TileLayer } from 'react-leaflet';
import HeatLayer from './HeatLayer';

const addressPoints = [
  { lat: 46.219752, long: 20.196753, int: 50 },
  { lat: 46.28048, long: 20.185456, int: 40 },
  { lat: 46.252048, long: 20.175456, int: 80 },
];

export default function MapTypeButton() {
  // const [addressPoints,setAdressPoint]=useState([]);

  //   const useEffect = (() => {
  //      axios
  //     .get('', {
  //       mode: 'no-cors',
  //     })
  //     .then((response) => {
  //       setAddressPoint(response.data);
  //     })
  //     .catch((error) => console.log(error));
  //   }, []);

  return (
    <>
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="Normal">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Black-White">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.Overlay name="Heatmap">
          <HeatLayer
            radius={200}
            blur={25}
            points={
              addressPoints
                ? addressPoints.map((p) => {
                    return [p.lat, p.long, p.int]; // lat lng intensity
                  })
                : []
            }
          />
        </LayersControl.Overlay>
      </LayersControl>
    </>
  );
}
