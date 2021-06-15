import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "./map.css";

export default function Map() {
    return (
        <div>
        <MapContainer center={[46.255973,20.14187]} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[46.255973,20.14187]}>
            <Popup>
              Jó lesz ez srácok <br /> Menni fog ez!
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    )
}