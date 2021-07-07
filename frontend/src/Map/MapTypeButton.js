import React from 'react';
import { LayersControl, TileLayer } from 'react-leaflet';
import HeatLayer from './HeatLayer';

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
        <LayersControl.BaseLayer name="BlackAndWhite">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.Overlay name="Heatmap">
          <HeatLayer
            radius={100}
            blur={25}
            gradient={{
              0: 'green',
              50: 'yellow',
              100: 'red',
            }}
            points={
              stations
                ? stations.map((station) => [
                    station.latitude,
                    station.longitude,
                    station.intensity,
                  ])
                : []
            }
          />
        </LayersControl.Overlay>
      </LayersControl>
    </>
  );
}
