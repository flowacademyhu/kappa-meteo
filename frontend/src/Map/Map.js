import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Markers from './Markers';
import 'leaflet/dist/leaflet.css';
import { Marker, TileLayer, MapContainer } from 'react-leaflet';
import styled from 'styled-components';
import { useGeolocation } from 'react-use';
import UserIcon from '../Icon/UserIcon';

const StyledMapContainer = styled(MapContainer)`
  width: 100%;
  height: 78vh;
`;

export default function Map() {
  const myPosition = useGeolocation();
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    axios
      .get('/api/stations', {
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
      zoom={8}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers coordinates={coordinates} />
      {myPosition.latitude !== null && (
        <>
          <pre>{(myPosition, null, 2)}</pre>
          <Marker
            icon={UserIcon}
            position={[myPosition.latitude, myPosition.longitude]}
          ></Marker>
        </>
      )}
    </StyledMapContainer>
  );
}
