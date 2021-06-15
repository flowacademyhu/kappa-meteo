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
        <header>
          <Menu />
        </header>
        <main>
          <Switch>
            <Route path="/térképnézet">Térképnézet</Route>
            <Route path="/hisztorikus adatok">Hisztorikus Adatok</Route>
            <Redirect from="/" to="/térképnézet" />
          </Switch>
        </main>
      </div>
      <Footer>Made by Buci, Barna, Fixo, Nándi, Vasi &#169;</Footer>
    </Router>
  );
}
