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
    return (
      <>
        {coordinates
          .filter(
            (e) =>
              !isNaN(parseFloat(e.latitude)) && !isNaN(parseFloat(e.longitude))
          )
          .map((e) => (
            <Marker
              key={e.id}
              name={e.name}
              position={[parseFloat(e.longitude), parseFloat(e.latitude)]}
              icon={MyIcon}
            >
              <MyPopup
                name={e.name}
                latitude={e.latitude}
                longitude={e.longitude}
              ></MyPopup>
            </Marker>
          ))}
      </>
    );
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
