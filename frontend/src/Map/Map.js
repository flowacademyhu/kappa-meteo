import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MyPopup from '../Popup/MyPopup.js';
import MyIcon from '../Icon/MyIcon';
import styled from 'styled-components';

const StyledMapContainer = styled(MapContainer)`
  width: 100%;
  height: 76vh;
`;

export default function Map() {
  return (
    <StyledMapContainer
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
    </StyledMapContainer>
  );
}
