import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MarkersAbove from './MarkersAbove';
import MarkersBelow from './MarkersBelow';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import styled from 'styled-components';
import { useGeolocation } from 'react-use';
import UserIcon from '../Icon/UserIcon';
import Zoom from './Zoom';
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';
import { Control } from 'leaflet';

const StyledMapContainer = styled(MapContainer)`
  width: 100%;
  height: 80vh;
`;

export default function Map() {
  const myPosition = useGeolocation();
  const [coordinates, setCoordinates] = useState([]);
  const [zoomLevel, setZoomLevel] = useState(8);

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
      center={[47.126471, 19.558264]}
      zoom={zoomLevel}
      scrollWheelZoom={true}
    >
      <ReactLeafletGoogleLayer
        continuousWorld={false}
        noWrap={false}
        apiKey="YOUR_API_KEY"
        type={'hybrid'}
      />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Zoom zoomLevel={zoomLevel} setZoomLevel={setZoomLevel} />
      {zoomLevel >= 10 ? (
        <MarkersAbove coordinates={coordinates} />
      ) : (
        <MarkersBelow coordinates={coordinates} />
      )}
      {/* <Control>
      <label for="mapview">Maptype:</label>

<select name="mapview" id="mapview">
  <option value="roadmap">Volvo</option>
  <option value="satellite">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
      </Control> */}

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
