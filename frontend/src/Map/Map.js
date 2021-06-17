import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MyPopup from '../Popup/MyPopup.js';
import MyIcon from '../Icon/MyIcon';
import styled from 'styled-components';
import axios from 'axios';

const StyledMapContainer = styled(MapContainer)`
  width: 100%;
  height: 100vh;
`;

export default function Map() {
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8081/api/coordinates')
      .then((response) => {
        setCoordinates(response.data);
      })
      .catch((error) => console.log(error));
  }, []);


  const generateCordinate = (coordinates) => {
    currentCoordinates = coordinates.map((e) => {
      console.log(e);
      return (
        <>
          <Marker
            key={e.id}
            position={[
              parseInt(e.latitude).toFixed(6),
              parseInt(e.longitude).toFixed(6),
            ]}
            icon={MyIcon}
          >
            <MyPopup />
          </Marker>
        </>
      );
    });
  };
  let currentCoordinates = generateCordinate(coordinates);

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
      {currentCoordinates}
    </StyledMapContainer>
  );
}
