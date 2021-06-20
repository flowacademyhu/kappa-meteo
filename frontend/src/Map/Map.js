import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import UserIcon from '../Icon/UserIcon.js';
import useGeoLocation from './UseGeoLocation.js';
import axios from 'axios';
import Markers from './Markers';

const StyledMapContainer = styled(MapContainer)`
  width: 100%;
  height: 80vh;
`;

export default function Map() {
  const [coordinates, setCoordinates] = useState([]);
  const location = useGeoLocation();

  // const showMyLocation = () => {
  //   if (location.loaded && !location.error) {
  //     mapRef.current.leafletElement.flyto([
  //       location.coordinates.lat,
  //       location.coordinates.lng,
  //     ]);
  //   } else {
  //     alert(location.error);
  //   }
  // };

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
    <div>
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
        <div>
          {location.coordinates && !location.error && (
            <Marker
              icon={UserIcon}
              position={(location.coordinates.lat, location.coordinates.lng)}
            ></Marker>
          )}
        </div>
      </StyledMapContainer>
    </div>
  );
}
