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
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-dark justify-content-center">
          <Menu />
          <main>
            <Switch>
              <Route path="/mapview" />
              <Route path="/historicdata" />
              <Redirect from="/" to="/mapview" />
            </Switch>
          </main>
        </nav>
      </div>
      <Footer>Made by Buci, Barna, Fixo, Nándi, Vasi &#169;</Footer>
    </Router>
  );
}
