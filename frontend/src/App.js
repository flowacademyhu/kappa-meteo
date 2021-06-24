import './App.css';
import HistoricData from './Dashboard/HistoricData';
import Map from './Map/Map.js';
import React from 'react';
import Menu from './Menu.js';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Footer from './Footer.js';

export default function App() {
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
        <Footer>Made by Buci, Barna, Fixo, Nándi, Vasi &#169;</Footer>
      </Router>
    </div>
  );
}
