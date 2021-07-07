import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from './Pages/Home.js';
import HeroSection from './Components/HeroSection/Hero';
import MapView from './Pages/MapView';
import Dashboard from './Pages/Dashboard';
import Chart from './Charts/Chart.js';
import Footer from './Components/Footer/Footer.js';
import DashboardToMap from './Dashboard/DashboardToMap.js';
import FileUpload from './Upload/FileUpload.js';
import styled from 'styled-components';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  flex-grow: 1;
  display: flex;
`;
const InnerWarepper = styled.div`
  min-width: 100%;
`;

export default function App() {
  return (
    <PageWrapper data-testid="map-container">
      <HelmetProvider>
        <Router>
          <Helmet>
            <title>MeteOApp - Főoldal</title>
          </Helmet>
          <Home />
          <Content>
            <InnerWarepper>
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
                <Route path="/dashboardtomap">
                  <Helmet>
                    <title>Dashboard</title>
                  </Helmet>
                  <DashboardToMap />
                </Route>
                <Route path="/historicdata/:id">
                  <Helmet>
                    <title>Dashboard</title>
                  </Helmet>
                  <Dashboard />
                </Route>
                <Route path="/diagrams">
                  <Helmet>
                    <title>Diagramok</title>
                  </Helmet>
                  <Chart />
                </Route>
                <Route path="/upload">
                  <Helmet>
                    <title>Fájl feltöltés</title>
                  </Helmet>
                  <FileUpload />
                </Route>
                <Redirect from="/" to="/home" />
              </Switch>
            </InnerWarepper>
          </Content>
        </Router>
        <Footer />
      </HelmetProvider>
    </PageWrapper>
  );
}
