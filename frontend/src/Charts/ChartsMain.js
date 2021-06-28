import React, { useState } from 'react';
import BatteryChart from './BatteryChart';
import AirChart from './AirChart';

export default function ChartsMain() {
  const [area, setArea] = useState(false);
  const [pie, setPie] = useState(false);

  const turnAir = () => {
    setPie(false);
    setArea(true);
  };

  const turnPie = () => {
    setArea(false);
    setPie(true);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2 p-2">
            <button onClick={turnAir} className="btn btn-primary">
              Air data
            </button>
            <button className="btn btn-primary">Misc data</button>
            <button onClick={turnPie} className="btn btn-primary">
              Battery data
            </button>
            <button className="btn btn-primary">Soil data</button>

            <button className="btn btn-primary">Wind data</button>
          </div>
        </div>
      </div>
      <div className="container align-items-center justify-content-center p-3">
        {pie && <BatteryChart prop={pie} />}
        {area && <AirChart prop={area} />}
      </div>
    </>
  );
}
