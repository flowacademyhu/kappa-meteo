import React from 'react';
import { LayersControl, TileLayer } from 'react-leaflet';
import HeatLayer from './HeatLayer';

const addressPoints = [
  { lat: 46.219752, long: 20.196753, int: 80 },
  { lat: 46.28048, long: 20.185456, int: 50 },
  { lat: 46.252048, long: 20.175456, int: 30 },
];

export default function MapTypeButton({ stations }) {
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
            radius={60}
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
