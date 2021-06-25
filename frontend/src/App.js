import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Home from './Pages/Home.js';
import HeroSection from './Components/HeroSection/Hero';
import MapView from './Pages/MapView';
import Dashboard from './Pages/Dashboard'
import Footer from './Components/Footer/Footer.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>MeteOApp - Főoldal</title>
        </Helmet>
        <Home />
        <Switch>
          <Route exact path="/">
            <HeroSection />
          </Route>
          <Route path="/mapview">
            <Helmet>
              <title>Térkép nézet</title>
            </Helmet>
            <MapView />
          </Route>
          <Route path="/historicdata">
            <Helmet>
              <title>Hisztorikus adatok</title>
            </Helmet>
            <Dashboard />
          </Route>
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
      <Footer />
    </HelmetProvider>
  );
}
