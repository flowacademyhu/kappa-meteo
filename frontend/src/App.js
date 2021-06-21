import Map from './Map/Map.js';
import React from 'react';
import Menu from './Menu.js';
import LineChart from './Charts/LineChart.js';

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

            <div data-testid="router" />
            <main>
              <Switch>
                <Route path="/mapview" />
                <Route path="/historicdata" />
                <Redirect from="/" to="/mapview" />
              </Switch>
            </main>
          </nav>
        </div>
        <div className="m-4 p-3">
          <Map />
        <LineChart/>
        </div>
        <Footer>Made by Buci, Barna, Fixo, Nándi, Vasi &#169;</Footer>
      </Router>
    </div>
  );
}
