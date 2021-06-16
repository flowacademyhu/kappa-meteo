import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { IoBarChartOutline } from 'react-icons/io5';

export default function Menu() {
  return (
    <div className="navbar justify-content-center">
      <Link className="nav-link" to="/mapview">
        <FaMapMarkedAlt /> Térképnézet
      </Link>
      <Link className="nav-link" to="/historicdata">
        <IoBarChartOutline /> Hisztorikus Adatok
      </Link>
    </div>
  );
}
