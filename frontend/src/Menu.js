import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div className="navbar justify-content-center">
      <Link className="nav-link" to="/mapview">
        Térképnézet
      </Link>
      <Link className="nav-link" to="/historicdata">
        Hisztorikus Adatok
      </Link>
    </div>
  );
}
