import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DashBoard.css';

import { IconContext } from 'react-icons';
import {
  RiCompassDiscoverFill,
  RiDashboard3Line,
  RiLeafLine,
} from 'react-icons/ri';
import { IoMdRocket } from 'react-icons/io';
import { WiHumidity, WiThermometer, WiLightning } from 'react-icons/wi';
import { DiCodrops } from 'react-icons/di';
import { VscDashboard } from 'react-icons/vsc';
import { HiSun } from 'react-icons/hi';
import { TiWeatherShower } from 'react-icons/ti';


import MeasureCard from '../MeasureCard/MeasureCard';
import MeasureCardForSM from '../MeasureCard/MeasureCardForSM';
import MeasureCardForVoltage from '../MeasureCard/MeasureCardForVoltage';

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
        <div className="row row-cols-1 row-cols-md-4 g-4 m-2">
          <div className="col">
            <div className="zoom">
              <div className="card">
                <IconContext.Provider value={{ color: '#c54b3c' }}>
                  <WiThermometer size={100} />
                </IconContext.Provider>
                <MeasureCard
                  titleText="Levegő hőmérséklet"
                  text={weatherData[4].airTemperature}
                  unit="&#8451;"
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
                  <RiDashboard3Line size={100} />
                </IconContext.Provider>
                <MeasureCard
                  titleText="Légnyomás"
                  text={weatherData[4].airPressure}
                  unit="kPa"
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
                  titleText="Levegő páratartalom"
                  text={weatherData[4].airHumidity}
                  unit="%"
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
                  <TiWeatherShower size={100} />
                </IconContext.Provider>
                <MeasureCard
                  titleText="Csapadék"
                  text={weatherData[4].rain}
                  unit="mm"
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
                  <RiLeafLine size={100} />
                </IconContext.Provider>
                <MeasureCard
                  titleText="Levélnedvesség"
                  text={weatherData[1].leafMoisture}
                  unit="perc"
                  lastData="Utolsó mért adat: "
                  footerText={weatherData[1].date}
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
                  unit="km/h"
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
                  <RiCompassDiscoverFill size={100} />
                </IconContext.Provider>
                <MeasureCard
                  titleText="Szélirány"
                  text={weatherData[4].windDirection}
                  unit="kelet"
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
                  <IoMdRocket size={100} />
                </IconContext.Provider>
                <MeasureCard
                  titleText="Széllökés"
                  text={weatherData[4].windGust}
                  unit="km/h"
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
                  <HiSun size={100} />
                </IconContext.Provider>
                <MeasureCard
                  titleText="Besugárzás"
                  text={weatherData[4].irradiation}
                  unit="W/m2"
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
                  <WiLightning size={100} />
                </IconContext.Provider>
                <MeasureCardForVoltage
                  titleText="Napelem töltő feszültség"
                  text={weatherData[1].solarCellChargingVoltage}
                  unit="V"
                  text1="Belső akkufeszültség: "
                  voltage1={weatherData[1].internalBatteryVoltage}
                  unit="V"
                  text2="Külső akkufeszültsé: "
                  voltage2={weatherData[1].externalBatteryVoltage}
                  unit="V"
                  lastData="Utolsó mért adat: "
                  footerText={weatherData[1].date}
                ></MeasureCardForVoltage>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="zoom">
              <div className="card">
                <IconContext.Provider value={{ color: '#c54b3c' }}>
                  <DiCodrops size={100} />
                </IconContext.Provider>
                <MeasureCardForSM
                  titleText="Talajnedvesség"
                  text1="30cm: "
                  data1={weatherData[1].soilMoisture30cm}
                  unit="%"
                  text2="60cm: "
                  data2={weatherData[1].soilMoisture60cm}
                  unit="%"
                  text3="90cm: "
                  data3={weatherData[1].soilMoisture90cm}
                  unit="%"
                  lastData="Utolsó mért adat: "
                  footerText={weatherData[1].date}
                ></MeasureCardForSM>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="zoom">
              <div className="card">
                <IconContext.Provider value={{ color: '#c54b3c' }}>
                  <WiThermometer size={100} />
                </IconContext.Provider>
                <MeasureCard
                  titleText="Talaj hőmérséklet"
                  text={weatherData[4].soilTemperature0cm}
                  unit="&#8451;"
                  lastData="Utolsó mért adat: "
                  footerText={weatherData[4].date}
                ></MeasureCard>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-4 g-4 m-2">
          <div className="col">
            <div className="zoom">

            </div>
            </div>
            </div>
        </div>
      </div>
    )
  );
}
