import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

const items = ['Térképnézet', 'Hisztorikus adatok'];

export default function Menu() {
  return (
    <nav className="navbar justify-content-center">
      {items.map((i) => (
        <button className="btn btn-outline-warning m-2 p-2" key={i}>
          <NavLink className="nav-link" to={`/${i.toLowerCase()}`}>
            {i}
          </NavLink>
        </button>
      ))}
    </nav>
  );
}
