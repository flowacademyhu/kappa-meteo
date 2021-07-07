import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker } from 'react-leaflet';
import styled from 'styled-components';
import { useGeolocation } from 'react-use';
import UserIcon from '../Icon/UserIcon';
import Zoom from './Zoom';
import MapTypeButton from './MapTypeButton';
import Markers from './Markers';
import cloudyday2 from '../Icon/AnimateIcon/cloudy-day-2.svg';
import cloudy from '../Icon/AnimateIcon/cloudy.svg';
import day from '../Icon/AnimateIcon/day.svg';
import rainy1 from '../Icon/AnimateIcon/rainy-1.svg';
import rainy6 from '../Icon/AnimateIcon/rainy-6.svg';

const icons = [cloudyday2, cloudy, day, rainy1, rainy6, day];

const StyledMapContainer = styled(MapContainer)`
  width: 100%;
  height: 78vh;
`;
const mainStation = [
  'Szeged',
  'ÉK_EBES',
  'OVF_Lajosmizse',
  'ÉD_POMÁZ',
  'ÉD_Gyõrszemere',
  'OVF_Vasszécseny',
  'DD_BALATONSZABADI',
  'OVF_Szederkény',
  'KÖ_MEZÕKÖVESD',
  'D_GYULA',
  'OVF_Demecser',
  'OVF_Nagykanizsa',
];

export default function Map() {
  const myPosition = useGeolocation();
  const [stations, setStations] = useState([]);
  const [zoomLevel, setZoomLevel] = useState(8);
  const [map, setMap] = useState(null);
  const [myFirstPosition, setMyFirstPosition] = useState(null);

  const flyToMyPosition = (pos) => {
    map.flyTo([pos.latitude, pos.longitude], 10, {
      duration: 1.5,
    });
  };

  useEffect(() => {
    if (myPosition !== null) {
      setMyFirstPosition(myPosition);
    }
  }, [myPosition]);

  useEffect(() => {
    axios
      .get('/api/stations', {
        mode: 'no-cors',
      })
      .then((response) => {
        setStations(
          response.data.map((el) => {
            return {
              ...el,
              icon: icons[Math.floor(Math.random() * icons.length)],
            };
          })
        );
      })
      .catch((error) => console.log(error));
  }, []);

  const flyToPosition = useCallback(
    (myFirstPosition) => {
      if (
        myFirstPosition?.latitude !== null &&
        myFirstPosition?.longitude !== null &&
        map !== null
      ) {
        map.flyTo([myFirstPosition.latitude, myFirstPosition.longitude], 10, {
          duration: 1.5,
        });
      }
    },
    [map]
  );

  useEffect(() => {
    flyToPosition(myFirstPosition);
  }, [flyToPosition, myFirstPosition]);

  const filteredStations = (stations) => {
    if (zoomLevel < 10) {
      return stations.filter((station) => mainStation.includes(station.name));
    } else {
      return stations;
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

        <Markers stations={filteredStations(stations)} />

        {myPosition.latitude !== null && (
          <>
            <Marker
              icon={UserIcon}
              position={[myPosition.latitude, myPosition.longitude]}
            ></Marker>
          </>
        )}
      </StyledMapContainer>
      {myPosition.latitude !== null && (
        <div className="justify-content-center d-flex">
          <button
            className="btn btn-success"
            onClick={() => flyToMyPosition(myFirstPosition)}
          >
            Saját lokáció
          </button>
        </div>
      )}
    </>
  );
}
