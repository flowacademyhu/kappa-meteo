import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { WiHumidity, WiThermometer } from 'react-icons/wi';
import { VscDashboard } from 'react-icons/vsc';
import { IconContext } from 'react-icons';
import './DashBoard.css';
import MeasureCard from '../MeasureCard/MeasureCard';

export default function Dashboard() {
  const [weatherData, setWeatherData] = useState([]);

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
                <MeasureCard
                  titleText="Hőmérséklet"
                  text={weatherData[4].airTemperature}
                  lastData="Utolsó mért adat: "
                  footerText={weatherData[4].date}
                ></MeasureCard>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="zoom">
              <div className="card">
                <IconContext.Provider value={{ color: '#c54b3c' }}>
                  <WiHumidity size={100} />
                </IconContext.Provider>
                <MeasureCard
                  titleText="Páratartalom"
                  text={weatherData[4].airHumidity}
                  lastData="Utolsó mért adat: "
                  footerText={weatherData[4].date}
                ></MeasureCard>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="zoom">
              <div className="card">
                <IconContext.Provider value={{ color: '#c54b3c' }}>
                  <VscDashboard size={100} />
                </IconContext.Provider>
                <MeasureCard
                  titleText="Szélsebesség"
                  text={weatherData[4].windSpeed}
                  lastData="Utolsó mért adat: "
                  footerText={weatherData[4].date}
                ></MeasureCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
