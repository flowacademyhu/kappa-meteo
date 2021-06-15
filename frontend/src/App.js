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
            <Route path="/térképnézet">Térképnézet</Route>
            <Route path="/hisztorikus adatok">Hisztorikus adatok</Route>
            <Redirect from="/" to="/home" />
          </Switch>
        </main>
      </div>
    </Router>
  );
}