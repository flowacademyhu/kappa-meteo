import HistoricData from './Dashboard/HistoricData';
import React from 'react';
import Menu from './Menu.js';
<<<<<<< HEAD
import LineChart2 from './Charts/LineChart2.js';
import BarChart1 from './Charts/BarChart1.js';
=======
import Map from './Map/Map.js';
import { Helmet, HelmetProvider } from 'react-helmet-async';
>>>>>>> origin/main

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
<<<<<<< HEAD
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
          <LineChart2 />
          <BarChart1/>
        </div>
        <Footer>Made by Buci, Barna, Fixo, Nándi, Vasi &#169;</Footer>
      </Router>
    </div>
=======
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
              <Redirect from="/" to="/mapview" />
            </Switch>
          </div>
          <Footer>Made by Buci, Barna, Fixo, Nándi, Vasi &#169;</Footer>
        </Router>
      </div>
    </HelmetProvider>
>>>>>>> origin/main
  );
}
