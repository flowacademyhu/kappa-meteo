import React, { useState, useEffect, axios } from 'react';
import { WiHumidity, WiThermometer } from 'react-icons/wi';
import { VscDashboard } from 'react-icons/vsc';
import { IconContext } from 'react-icons';
import './DashBoard.css';

export default function Dashboard() {
  const [temperature, setTemperature] = useState();
  const [moisture, setMoisture] = useState();
  const [windforce, setWindforce] = useState();
  const [date, setDate] = useState();

  useEffect(async () => {
    try {
      const response = await axios.get(`https://exmaple.com/`);
      setTemperature(response.data);
      setMoisture(response.data);
      setWindforce(response.data);
      setDate(response.data);
    } catch (err) {
      console.error('Error during api call:', err);
    }
  }, []);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
        <div className="col">
          <div className="zoom">
            <div className="card h-100">
              <IconContext.Provider value={{ color: '#c54b3c' }}>
                <WiThermometer size={100} />
              </IconContext.Provider>
              <div className="card-body">
                <h5 className="card-title">Hőmérséklet</h5>
                <p className="card-text">{temperature} &#8451;</p>
              </div>
              <div className="card-footer">
                <p>Utolsó mérés: {date}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="zoom">
            <div className="card h-100">
              <IconContext.Provider value={{ color: '#c54b3c' }}>
                <WiHumidity size={100} />
              </IconContext.Provider>
              <div className="card-body">
                <h5 className="card-title">Páratartalom</h5>
                <p className="card-text">{moisture} %</p>
              </div>
              <div className="card-footer">
                <p>Utolsó mérés: {date}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="zoom">
            <div className="card h-100">
              <IconContext.Provider value={{ color: '#c54b3c' }}>
                <VscDashboard size={100} />
              </IconContext.Provider>
              <div className="card-body">
                <h5 className="card-title">Szélerősség</h5>
                <p className="card-text">{windforce} km/h</p>
              </div>
              <div className="card-footer">
                <p>Utolsó mérés: {date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
