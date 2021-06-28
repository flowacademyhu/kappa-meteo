import React, { useState } from 'react';
import BatteryChart from './BatteryChart';
import AirChart from './AirChart';
import MiscChart from './MiscChart';

export default function ChartsMain() {
  const [air, setAir] = useState(false);
  const [battery, setBattery] = useState(false);
  const [misc, setMisc] = useState(false);

  const turnAir = () => {
    setMisc(false);
    setBattery(false);
    setAir(true);
  };

  const turnBattery = () => {
    setAir(false);
    setMisc(false);
    setBattery(true);
  };

  const turnMisc = () => {
    setAir(false);
    setBattery(false);
    setMisc(true);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2 p-2">
            <button onClick={turnAir} className="btn btn-primary">
              Air data
            </button>
            <button onClick={turnMisc} className="btn btn-primary">
              Misc data
            </button>
            <button onClick={turnBattery} className="btn btn-primary">
              Battery data
            </button>
            <button className="btn btn-primary">Soil data</button>

            <button className="btn btn-primary">Wind data</button>
          </div>
        </div>
      </div>
      <div className="container align-items-center justify-content-center p-3">
        {battery && <BatteryChart />}
        {air && <AirChart />}
        {misc && <MiscChart />}
      </div>
    </>
  );
}
