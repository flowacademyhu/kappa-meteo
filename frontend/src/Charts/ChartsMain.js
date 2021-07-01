import React, { useState } from 'react';
import BatteryChart from './BatteryChart';
import AirChart from './AirChart';
import MiscChart from './MiscChart';
import SoilChart from './SoilChart';
import WindChart from './WindChart';
import moment from 'moment';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export default function ChartsMain() {
  const [visibility, setVisibility] = useState({
    air: false,
    battery: false,
    misc: false,
    soil: false,
    wind: false,
  });

  const [dateState, setDateState] = useState([
    {
      startDate: new Date('2021-04-24'),
      endDate: new Date('2021-04-30'),
      key: 'selection',
    },
  ]);

  const turnVisibilty = (type) => {
    const newVisibility = Object.assign({}, visibility);
    Object.keys(newVisibility).forEach((key) => {
      newVisibility[key] = false;
    });
    newVisibility[type] = true;
    setVisibility(newVisibility);
  };

  const dateFormat = (date) => {
    return moment(date).format('YYYY-MM-DD');
  };

  const xAxisDateFormat = (date) => {
    return moment(date).format('MM-DD');
  };

  const chartDateFormat = (date) => {
    return moment(date).format('MM-DD HH:mm');
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2 p-2">
            <button
              onClick={() => turnVisibilty('air')}
              className="btn btn-primary"
            >
              Air data
            </button>
            <button
              onClick={() => turnVisibilty('misc')}
              className="btn btn-primary"
            >
              Misc data
            </button>
            <button
              onClick={() => turnVisibilty('battery')}
              className="btn btn-primary"
            >
              Battery data
            </button>
            <button
              onClick={() => turnVisibilty('soil')}
              className="btn btn-primary"
            >
              Soil data
            </button>
            <button
              onClick={() => turnVisibilty('wind')}
              className="btn btn-primary"
            >
              Wind data
            </button>
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
      <div className="container align-items-center justify-content-center p-3 mb-5">
        {visibility.battery && (
          <BatteryChart
            dateState={dateState}
            dateFormat={dateFormat}
            xAxisDateFormat={xAxisDateFormat}
            chartDateFormat={chartDateFormat}
          />
        )}
        {visibility.air && (
          <AirChart
            dateState={dateState}
            dateFormat={dateFormat}
            xAxisDateFormat={xAxisDateFormat}
            chartDateFormat={chartDateFormat}
          />
        )}
        {visibility.misc && (
          <MiscChart
            dateState={dateState}
            dateFormat={dateFormat}
            xAxisDateFormat={xAxisDateFormat}
            chartDateFormat={chartDateFormat}
          />
        )}
        {visibility.soil && (
          <SoilChart
            dateState={dateState}
            dateFormat={dateFormat}
            xAxisDateFormat={xAxisDateFormat}
            chartDateFormat={chartDateFormat}
          />
        )}
        {visibility.wind && (
          <WindChart
            dateState={dateState}
            dateFormat={dateFormat}
            xAxisDateFormat={xAxisDateFormat}
            chartDateFormat={chartDateFormat}
          />
        )}
      </div>
    </>
  );
}
