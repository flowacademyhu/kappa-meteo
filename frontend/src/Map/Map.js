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
  // const [latitude, setLatitude] = useState();
  // const [longitude, setLongitude] = useState();
  let [coordinates, setCoordinates] = useState();
  // callback nem lehet async és csináljak DOM function-t
  useEffect(async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/coordinates');
      setCoordinates(response.data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }, []);

  // useEffect(() => {
  //   async function fetchMyAPI() {
  //     const response = await axios.get('http://localhost:8081/api/coordinates');
  //     // response = await response.json()
  //     console.log(response.data);
  //     setCoordinates(response.data);
  //   }
  //   if (!coordinates) {
  //     //  fetchMyAPI();
  //   }
  // }, []);

  // const generateCordinate = () => {};
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
      <Marker
        // [parseInt(coordinates[1].latitude), parseInt(coordinates[1].longitude)]
        position={[
          parseInt(coordinates[1].latitude).toFixed(6),
          parseInt(coordinates[1].longitude).toFixed(6),
        ]}
        icon={MyIcon}
      >
        <MyPopup />
      </Marker>
    </StyledMapContainer>
  );
}
