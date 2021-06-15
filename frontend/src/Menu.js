import React from 'react';
import { NavLink } from 'react-router-dom';

const items = ['Térképnézet', 'Hisztorikus Adatok'];

export default function Menu() {
  return (
    <ul className="nav nav-pills my-2 justify-content-center">
      {items.map((i) => (
        <li key={i} className="nav-item">
          <NavLink className="nav-link" to={`/${i.toLowerCase()}`}>
            {i}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
