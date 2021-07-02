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

const dataType = ['air', 'battery', 'misc', 'soil', 'wind'];

function Chart() {
  const [typeGroup, setTypeGroup] = useState('');
  const [dateState, setDateState] = useState([
    {
      startDate: new Date('2021-04-24'),
      endDate: new Date('2021-04-30'),
      key: 'selection',
    },
  ]);

  const changeType = (type) => {
    if (typeGroup !== null && typeGroup !== undefined) {
      if (typeGroup === type) {
        setTypeGroup('');
      } else {
        setTypeGroup(type);
      }
    }
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
  console.log(typeGroup);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-2 p-2">
            {dataType.map((type, index) => (
              <button
                key={index}
                onClick={() => changeType({ type })}
                className="btn btn-primary"
              >
                {type} data
              </button>
            ))}
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
      <div className="container align-items-center justify-content-center p-3 mb-5"></div>
      {typeGroup.type === 'air' && (
        <AirChart
          dateState={dateState}
          dateFormat={dateFormat}
          xAxisDateFormat={xAxisDateFormat}
          chartDateFormat={chartDateFormat}
        />
      )}
      {typeGroup.type === 'battery' && (
        <BatteryChart
          dateState={dateState}
          dateFormat={dateFormat}
          xAxisDateFormat={xAxisDateFormat}
          chartDateFormat={chartDateFormat}
        />
      )}
      {typeGroup.type === 'misc' && (
        <MiscChart
          dateState={dateState}
          dateFormat={dateFormat}
          xAxisDateFormat={xAxisDateFormat}
          chartDateFormat={chartDateFormat}
        />
      )}
      {typeGroup.type === 'soil' && (
        <SoilChart
          dateState={dateState}
          dateFormat={dateFormat}
          xAxisDateFormat={xAxisDateFormat}
          chartDateFormat={chartDateFormat}
        />
      )}
      {typeGroup.type === 'wind' && (
        <WindChart
          dateState={dateState}
          dateFormat={dateFormat}
          xAxisDateFormat={xAxisDateFormat}
          chartDateFormat={chartDateFormat}
        />
      )}
    </div>
  );
}

export default Chart;
