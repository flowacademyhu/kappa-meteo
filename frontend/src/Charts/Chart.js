import React, { useState, useEffect } from 'react';
import BatteryChart from './BatteryChart';
import AirChart from './AirChart';
import MiscChart from './MiscChart';
import SoilChart from './SoilChart';
import WindChart from './WindChart';
import moment from 'moment';
import axios from 'axios';
import { DateRange } from 'react-date-range';
import { GroupText, GroupBorder, SideNav } from './ChartStyle.js';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import SideButtons from './SideButtons';
import { GiWindsock, GiDrop } from 'react-icons/gi';
import { RiBattery2ChargeLine, RiDatabaseLine } from 'react-icons/ri';
import { FaTemperatureHigh } from 'react-icons/fa';

const dataTypes = [
  {
    icon: FaTemperatureHigh,
    text: 'Levegő-Adatok',
    name: 'air',
  },
  {
    icon: RiDatabaseLine,
    text: 'Vegyes-Adatok',
    name: 'misc',
  },
  {
    icon: GiWindsock,
    text: 'Szél-Adatok',
    name: 'wind',
  },
  {
    icon: GiDrop,
    text: 'Talaj-Adatok',
    name: 'soil',
  },
  {
    icon: RiBattery2ChargeLine,
    text: 'Szerviz-Adatok',
    name: 'battery',
  },
];

function Chart() {
  const [typeGroup, setTypeGroup] = useState('air');
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
          `/api/stations/${station}/${typeGroup}?start=${dateFormat(
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
      <SideNav>
        {dataTypes.map((type, index) => (
          <SideButtons
            key={index}
            Icon={type.icon}
            onClick={() => setTypeGroup(type.name)}
            text={type.text}
          ></SideButtons>
        ))}
      </SideNav>
      <div className="container">
        <div className="row text-center">
          <GroupBorder>
            <GroupText>Dátum választó</GroupText>
            <DateRange
              editableDateInputs={true}
              rangeColors={['#c54b3c']}
              onChange={(item) => setDateState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={dateState}
              minDate={new Date('2021-01-01')}
              maxDate={new Date('2021-04-30')}
            />
          </GroupBorder>
        </div>
      </div>
      <div className="container">
        <div className="row text-center">
          <GroupBorder>
            <GroupText>Diagramok</GroupText>
            <div className="row">
              <div className="col">
                <label htmlFor="stationId">Állomás választása:</label>
                <select
                  className="m-4"
                  value={station}
                  name="stations"
                  id="stations"
                  onChange={(e) => setStation(e.target.value)}
                >
                  <option value="12">Szeged</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="dateTime">Intervallum választás:</label>
                <select
                  className="m-4"
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
            {typeGroup === 'air' && (
              <AirChart linedata={linedata} xAxisDateFormat={xAxisDateFormat} />
            )}
            {typeGroup === 'battery' && (
              <BatteryChart
                linedata={linedata}
                xAxisDateFormat={xAxisDateFormat}
              />
            )}
            {typeGroup === 'misc' && (
              <MiscChart
                linedata={linedata}
                xAxisDateFormat={xAxisDateFormat}
              />
            )}
            {typeGroup === 'soil' && (
              <SoilChart
                linedata={linedata}
                xAxisDateFormat={xAxisDateFormat}
              />
            )}
            {typeGroup === 'wind' && (
              <WindChart
                linedata={linedata}
                xAxisDateFormat={xAxisDateFormat}
              />
            )}
          </GroupBorder>
        </div>
      </div>
    </div>
  );
}

export default Chart;
