import React, { useState, useEffect } from 'react';
import BatteryChart from './BatteryChart';
import AirChart from './AirChart';
import MiscChart from './MiscChart';
import SoilChart from './SoilChart';
import WindChart from './WindChart';
import moment from 'moment';
import axios from 'axios';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const dataTypes = ['air', 'battery', 'misc', 'soil', 'wind'];

function Chart() {
  const [typeGroup, setTypeGroup] = useState({ type: 'air' });
  const [linedata, setLineData] = useState(null);
  const [dataType, setDataType] = useState('DAILY');
  const [station, setStation] = useState(12);
  const [dateState, setDateState] = useState([
    {
      startDate: new Date('2021-04-24'),
      endDate: new Date('2021-04-30'),
      key: 'selection',
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `/api/stations/${station}/${typeGroup.type}?start=${dateFormat(
            dateState[0].startDate
          )}&end=${dateFormat(dateState[0].endDate)}&type=${dataType}`
        );
        const mappedResult = response.data
          .map((item, index) => {
            return { ...item, number: index };
          })
          .map((el) => {
            return { ...el, date: chartDateFormat(el.date) };
          });
        setLineData(mappedResult);
      } catch (err) {
        console.error('Error during api call:', err);
      }
    }
    fetchData();
  }, [dataType, station, dateState, typeGroup]);

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

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-2 p-2">
            {dataTypes.map((type, index) => (
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
      <div>
        <div className="container p-3 m-3">
          <label htmlFor="stationId">Choose a Station:</label>
          <select
            value={station}
            name="stations"
            id="stations"
            onChange={(e) => setStation(e.target.value)}
          >
            <option value="12">Szeged</option>
          </select>
        </div>
        <div className="container p-3 m-3">
          <label htmlFor="dateTime">Choose a date:</label>
          <select
            name="dateTime"
            id="datetime"
            onChange={(e) => setDataType(e.target.value)}
          >
            <option value="DAILY">Napi</option>
            <option value="HOURLY">Órai</option>
            <option value="TEN_MIN">10 perces</option>
          </select>
        </div>
      </div>
      <div className="container align-items-center justify-content-center p-3 mb-5"></div>
      {typeGroup.type === 'air' && (
        <AirChart linedata={linedata} dateState={dateState} />
      )}
      {typeGroup.type === 'battery' && (
        <BatteryChart linedata={linedata} dateState={dateState} />
      )}
      {typeGroup.type === 'misc' && (
        <MiscChart linedata={linedata} dateState={dateState} />
      )}
      {typeGroup.type === 'soil' && (
        <SoilChart linedata={linedata} dateState={dateState} />
      )}
      {typeGroup.type === 'wind' && (
        <WindChart linedata={linedata} dateState={dateState} />
      )}
    </div>
  );
}

export default Chart;
