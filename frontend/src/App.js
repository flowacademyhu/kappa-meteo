import HistoricData from './Dashboard/HistoricData';
import React from 'react';
import Menu from './Menu.js';
import Map from './Map/Map.js';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ChartsMain from './Charts/ChartsMain';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Footer from './Footer.js';

export default function App() {
  return (
    <HelmetProvider>
      <div data-testid="map-container">
        <Router>
          <div>
            <nav className="navbar navbar-expand-lg bg-dark justify-content-center">
              <Menu />
            </nav>
            <div data-testid="router" />
            <Switch>
              <Route path="/mapview">
                <Helmet>
                  <title>Térkép nézet</title>
                </Helmet>
                <div className="mb-4 p-3">
                  <Map />
                </div>
              </Route>
              <Route path="/historicdata">
                <Helmet>
                  <title>Hisztorikus adatok</title>
                </Helmet>
                <HistoricData />
              </Route>
              <Route path="/chart">
                <ChartsMain />
              </Route>
              <Redirect from="/" to="/mapview" />
            </Switch>
          </div>
          <Footer>Made by Buci, Barna, Fixo, Nándi, Vasi &#169;</Footer>
        </Router>
      </div>
    </HelmetProvider>
  );
}
