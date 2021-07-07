import React, { useState, useEffect } from 'react';
import { LayersControl, TileLayer } from 'react-leaflet';
import HeatLayer from './HeatLayer';

export default function MapTypeButton({ stations }) {
  const [stationList, setStationList] = useState(null);

  useEffect(() => {
    if (stations) {
      let tempArray = [];
      stations?.forEach((element) => {
        if (element.longitude !== null && element.latitude !== null) {
          tempArray.push({
            id: element.id,
            name: element.name,
            longitude: element.longitude,
            latitude: element.latitude,
            intensity: element.intensity,
          });
        }
      });
      setStationList(tempArray);
    }
  }, [stations]);

  return (
    <>
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="Normal">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Black-White">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
            url="https://tiles.wmflabs.org/bw-mapnik/%7Bz%7D/%7Bx%7D/%7By%7D.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.Overlay name="Heatmap">
          <HeatLayer
            radius={100}
            blur={25}
            points={
              stationList
                ? stationList.map((p) => {
                    return [p.latitude, p.longitude, p.intensity]; // lat lng intensity
                  })
                : []
            }
          />
        </LayersControl.Overlay>
      </LayersControl>
    </>
  );
}
