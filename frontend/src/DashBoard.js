import React from 'react';
import { WiHumidity, WiThermometer } from 'react-icons/wi';
import { VscDashboard } from 'react-icons/vsc';
import { IconContext } from 'react-icons';

export default function Dashboard() {
  return (
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card h-100">
          <IconContext.Provider value={{ color: '#c54b3c' }}>
            <WiThermometer size={100} />
          </IconContext.Provider>
          <div class="card-body">
            <h5 class="card-title">Hőmérséklet</h5>
            <p class="card-text">0 Celsius</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 10 mins ago</small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <IconContext.Provider value={{ color: '#c54b3c' }}>
            <WiHumidity size={100} />
          </IconContext.Provider>
          <div class="card-body">
            <h5 class="card-title">Páratartalom</h5>
            <p class="card-text">0 %</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 10 mins ago</small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <IconContext.Provider value={{ color: '#c54b3c' }}>
            <VscDashboard size={100} />
          </IconContext.Provider>
          <div class="card-body">
            <h5 class="card-title">Szélerősség</h5>
            <p class="card-text">0 km/h</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 10 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  );
}
