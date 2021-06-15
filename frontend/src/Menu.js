import React from 'react';
import './Menu.css';

export default function Menu() {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link" href="/mapview">
          Térképnézet
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/historicdata">
          Hisztorikus Adatok
        </a>
      </li>
    </ul>
  );
}
