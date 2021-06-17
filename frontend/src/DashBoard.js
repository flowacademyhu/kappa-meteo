import React from 'react';
import { WiHumidity, WiThermometer } from 'react-icons/wi';
import { VscDashboard } from 'react-icons/vsc';
import { IconContext } from 'react-icons';

export default function Dashboard() {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100">
          <IconContext.Provider value={{ color: '#c54b3c' }}>
            <WiThermometer size={100} />
          </IconContext.Provider>
          <div className="card-body">
            <h5 className="card-title">Hőmérséklet</h5>
            <p className="card-text">0 &#8451;</p>
          </div>
          <div className="card-footer">
            <small>Utolsó 10 percben mért adatok</small>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <IconContext.Provider value={{ color: '#c54b3c' }}>
            <WiHumidity size={100} />
          </IconContext.Provider>
          <div className="card-body">
            <h5 className="card-title">Páratartalom</h5>
            <p className="card-text">0 %</p>
          </div>
          <div className="card-footer">
            <small>Utolsó 10 percben mért adatok</small>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <IconContext.Provider value={{ color: '#c54b3c' }}>
            <VscDashboard size={100} />
          </IconContext.Provider>
          <div className="card-body">
            <h5 className="card-title">Szélerősség</h5>
            <p className="card-text">0 km/h</p>
          </div>
          <div className="card-footer">
            <small>Utolsó 10 percben mért adatok</small>
          </div>
        </div>
      </div>
    </div>
  );
}
