import React from "react";
import Menu from "./Menu.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <Menu />
        </header>
        <main>
          <Switch>
            <Route path="/home">Térképnézet</Route>
            <Route path="/histericdata">Hisztorikus Adatok</Route>
            <Redirect from="/" to="/home" />
          </Switch>
        </main>
      </div>
      <footer>
        Valami
      </footer>
    </Router>
  );
}