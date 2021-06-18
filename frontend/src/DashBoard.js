import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { WiHumidity, WiThermometer } from 'react-icons/wi';
import { VscDashboard } from 'react-icons/vsc';
import { IconContext } from 'react-icons';
import './DashBoard.css';

export default function Dashboard() {
  const [weatherData, setWeatherData] = useState([0]);

  useEffect(async () => {
    try {
      const response = await axios.get(`http://localhost:8081/api/ten`);
      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    weatherData.length > 0 && (
      <div className="container">
        <h1>Mérési adatok</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
          <div className="col">
            <div className="zoom">
              <div className="card">
                <IconContext.Provider value={{ color: '#c54b3c' }}>
                  <WiThermometer size={100} />
                </IconContext.Provider>
                <div className="card-body">
                  <h5 className="card-title">Hőmérséklet</h5>
                  <h3 className="card-text">
                    {weatherData[0].airTemperature} &#8451;
                  </h3>
                </div>
                <div className="card-footer">
                  <p>Utolsó mérés: {weatherData[0].date} </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="zoom">
              <div className="card">
                <IconContext.Provider value={{ color: '#c54b3c' }}>
                  <WiHumidity size={100} />
                </IconContext.Provider>
                <div className="card-body">
                  <h5 className="card-title">Páratartalom</h5>
                  <h3 className="card-text">{weatherData[0].airHumidity} %</h3>
                </div>
                <div className="card-footer">
                  <p>Utolsó mérés: {weatherData[0].date}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="zoom">
              <div className="card">
                <IconContext.Provider value={{ color: '#c54b3c' }}>
                  <VscDashboard size={100} />
                </IconContext.Provider>
                <div className="card-body">
                  <h5 className="card-title">Szélerősség</h5>
                  <h3 className="card-text">{weatherData[0].windSpeed} km/h</h3>
                </div>
                <div className="card-footer">
                  <p>Utolsó mérés: {weatherData[0].date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
