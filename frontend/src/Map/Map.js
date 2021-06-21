import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import axios from 'axios';
import Markers from './Markers';

const StyledMapContainer = styled(MapContainer)`
  width: 100%;
  height: 76vh;
`;

export default function Map() {

  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    axios
      .get('/api/coordinates', {
        mode: 'no-cors',
      })
      .then((response) => {
        setCoordinates(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <StyledMapContainer
      center={[47.497913, 19.040236]}
      zoom={10}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers coordinates={coordinates} />
    </StyledMapContainer>
  );
}
