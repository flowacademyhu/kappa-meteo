import React, { useState } from 'react';
import BatteryChart from './BatteryChart';
import AirChart from './AirChart';
import MiscChart from './MiscChart';
import moment from 'moment';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export default function ChartsMain() {
  const [air, setAir] = useState(false);
  const [battery, setBattery] = useState(false);
  const [misc, setMisc] = useState(false);
  const [dateState, setDateState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);

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

  const dateFormat = (date) => {
    return moment(date).format('YYYY-MM-DD');
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
      <DateRange
        editableDateInputs={true}
        rangeColors={['#c54b3c']}
        onChange={(item) => setDateState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={dateState}
        minDate={new Date('2021-01-01')}
        maxDate={new Date('2021-04-30')}
      />
      <div className="container align-items-center justify-content-center p-3">
        {battery && (
          <BatteryChart dateState={dateState} dateFormat={dateFormat} />
        )}
        {air && <AirChart dateState={dateState} dateFormat={dateFormat} />}
        {misc && <MiscChart dateState={dateState} dateFormat={dateFormat} />}
      </div>
    </>
  );
}
