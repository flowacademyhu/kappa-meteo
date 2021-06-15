import React from 'react';
import './Menu.css';

const items = ['Térképnézet', 'Hisztorikus adatok'];

export default function Menu() {
  return (
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link" href="/mapview">
          Térképnézet
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/historicdata">
          Hisztorikus Adatok
        </a>
      </li>
    </ul>
  );
}
