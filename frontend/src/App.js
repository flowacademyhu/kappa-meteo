import HistoricData from './Dashboard/HistoricData';
import React from 'react';
import Menu from './Menu.js';
import Map from './Map/Map.js';
import { Marker, TileLayer, MapContainer } from 'react-leaflet';
import styled from 'styled-components';
import { useGeolocation } from 'react-use';
import UserIcon from './Icon/UserIcon';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Footer from './Footer.js';

const StyledMapContainer = styled(MapContainer)`
  width: 100%;
  height: 80vh;
`;

export default function App() {
  const myPosition = useGeolocation();
  return (
    <div data-testid="map-container">
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg bg-dark justify-content-center">
            <Menu />
          </nav>
          <div data-testid="router" />
          <Switch>
            <Route path="/mapview">
              <div className="m-4 p-3">
                <title>Térkép nézet</title>
                <Map />
              </div>
            </Route>
            <Route path="/historicdata">
              <HistoricData />
            </Route>
            <Redirect from="/" to="/mapview" />
          </Switch>
        </div>
        <div className="m-4 p-3">
          <StyledMapContainer
            center={[47.497913, 19.040236]}
            zoom={10}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Map></Map>
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
        </div>
        <Footer>Made by Buci, Barna, Fixo, Nándi, Vasi &#169;</Footer>
      </Router>
    </div>
  );
}
