import './App.css';
import SwiperCards from './Dashboard/SwiperCards';
import Map from './Map/Map.js';
import React from 'react';
import Menu from './Menu.js';


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
              <Switch>
                <Route path="/mapview">
                <div className="m-4 p-3">
          <Map />
          </div>
          </Route>
                <Route path="/historicdata" >
                <SwiperCards/>
                </Route>
                <Redirect from="/" to="/mapview" />
              </Switch>
        </div>
      <Footer>Made by Buci, Barna, Fixo, Nándi, Vasi &#169;</Footer>
    </Router>
   </div>
  );
}
