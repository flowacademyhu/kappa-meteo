import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MarkersAbove from './MarkersAbove';
import MarkersBelow from './MarkersBelow';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker } from 'react-leaflet';
import styled from 'styled-components';
import { useGeolocation } from 'react-use';
import UserIcon from '../Icon/UserIcon';
import Zoom from './Zoom';
import MapTypeButton from './MapTypeButton';

const StyledMapContainer = styled(MapContainer)`
  width: 100%;
  height: 80vh;
`;

export default function Map() {
  const myPosition = useGeolocation();
  const [coordinates, setCoordinates] = useState([]);
  const [zoomLevel, setZoomLevel] = useState(8);
  const [map, setMap] = useState(null);

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

  useEffect(() => {
    flyToPosition(myPosition, map);
  }, [map, myPosition]);

  const flyToPosition = (myPosition, map) => {
    if (myPosition.latitude !== null && map !== null) {
      map.flyTo([myPosition.latitude, myPosition.longitude], 10, {
        duration: 1.5,
      });
    }
  };

  return (
    <>
      <StyledMapContainer
        center={
          myPosition.latitude === null
            ? [47.126471, 19.558264]
            : [myPosition.latitude, myPosition.longitude]
        }
        zoom={zoomLevel}
        scrollWheelZoom={true}
        whenCreated={setMap}
      >
        <MapTypeButton myPosition={myPosition} />
        <Zoom zoomLevel={zoomLevel} setZoomLevel={setZoomLevel} />
        {zoomLevel >= 10 ? (
          <MarkersAbove coordinates={coordinates} />
        ) : (
          <MarkersBelow coordinates={coordinates} />
        )}
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
      )
      {myPosition.latitude !== null ? (
        <div className="justify-content-center d-flex m-2">
          <button
            className="btn btn-primary mr-auto ml-auto"
            onClick={() => flyToPosition(myPosition, map)}
          >
            MyPostition
          </button>
        </div>
      ) : null}
    </>
  );
}
