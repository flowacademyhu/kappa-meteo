import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Markers from './Markers';
import 'leaflet/dist/leaflet.css';

export default function Map() {
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    axios
      .get('/api/stations', {
        mode: 'no-cors',
      })
      .then((response) => {
        setCoordinates(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Markers coordinates={coordinates} />
    </div>
  );
}
