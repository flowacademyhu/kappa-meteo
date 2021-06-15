import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import './map.css';
import MyPopup from '../Popup/MyPopup.js';
import MyIcon from '../Icon/MyIcon';

export default function Map() {
  // , { useState }
  // let [latitude, setLatitude] = useState();
  // let [longitude, setLongitude] = useState();

  return (
    <div>
      <MapContainer
        center={[46.255973, 20.14187]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[46.255973, 20.14187]} icon={MyIcon}>
          <MyPopup />
        </Marker>
      </MapContainer>
    </div>
  );
}
