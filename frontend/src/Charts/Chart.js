import React, { useState, useEffect } from 'react';
import BatteryChart from './BatteryChart';
import AirChart from './AirChart';
import MiscChart from './MiscChart';
import SoilChart from './SoilChart';
import WindChart from './WindChart';
import moment from 'moment';
import axios from 'axios';
import { DateRangePicker } from 'react-date-range';
import { GroupText, GroupBorder, SideNav } from './ChartStyle.js';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import SideButtons from './SideButtons';
import { GiWindsock, GiDrop } from 'react-icons/gi';
import { RiBattery2ChargeLine, RiDatabaseLine } from 'react-icons/ri';
import { FaTemperatureHigh } from 'react-icons/fa';
import styled from 'styled-components';
import StationSelector from '../StationSelector';

const NewDateRangePicker = styled(DateRangePicker)`
  width: 90%;
  justify-content: center;
`;

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

const rangeArray = [
  {
    label: 'Mai nap',
    hasCustomRendering: false,
    range: () => ({
      startDate: new Date('2021-04-30'),
      endDate: new Date('2021-04-30'),
    }),
    isSelected() {
      return true;
    },
  },
  {
    label: 'Tegnap',
    hasCustomRendering: false,
    range: () => ({
      startDate: new Date('2021-04-29'),
      endDate: new Date('2021-04-29'),
    }),
    isSelected() {
      return true;
    },
  },
  {
    label: 'Ez a hét',
    hasCustomRendering: false,
    range: () => ({
      startDate: new Date('2021-04-26'),
      endDate: new Date('2021-04-30'),
    }),
    isSelected() {
      return true;
    },
  },
  {
    label: 'Előző hét',
    hasCustomRendering: false,
    range: () => ({
      startDate: new Date('2021-04-19'),
      endDate: new Date('2021-04-25'),
    }),
    isSelected() {
      return true;
    },
  },
  {
    label: 'Ez a hónap',
    hasCustomRendering: false,
    range: () => ({
      startDate: new Date('2021-04-01'),
      endDate: new Date('2021-04-30'),
    }),
    isSelected() {
      return true;
    },
  },
  {
    label: 'Előző hónap',
    hasCustomRendering: false,
    range: () => ({
      startDate: new Date('2021-03-01'),
      endDate: new Date('2021-03-31'),
    }),
    isSelected() {
      return true;
    },
  },
];

const fixedTwoDigits = (linedata) => {
  if (typeof linedata === 'number') {
    return linedata.toFixed(2);
  }
  return linedata;
};

function Chart() {
  const [typeGroup, setTypeGroup] = useState('air');
  const [linedata, setLineData] = useState(null);
  const [dataType, setDataType] = useState('DAILY');
  const [stationId, setStationId] = useState();
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
          `/api/stations/${stationId}/${typeGroup}?start=${dateFormat(
            dateState[0].startDate
          )}&end=${dateFormat(dateState[0].endDate)}&type=${dataType}`
        );
        const mappedResult = response.data
          .map((item) => {
            Object.keys(item).forEach((key) => {
              const roundedvalue = fixedTwoDigits(item[key]);
              item[key] = roundedvalue;
            });
            return item;
          })
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
  }, [dataType, stationId, dateState, typeGroup]);

  const dateFormat = (date) => {
    return moment(date).format('YYYY-MM-DD');
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
            <NewDateRangePicker
              editableDateInputs={true}
              rangeColors={['#c54b3c']}
              onChange={(item) => setDateState([item.selection])}
              staticRanges={rangeArray}
              inputRanges={[]}
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
                  value={stationId}
                  name="stations"
                  id="stations"
                  onChange={(e) => setStationId(e.target.value)}
                >
                  <StationSelector />
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
            {typeGroup === 'air' && <AirChart linedata={linedata} />}
            {typeGroup === 'battery' && <BatteryChart linedata={linedata} />}
            {typeGroup === 'misc' && <MiscChart linedata={linedata} />}
            {typeGroup === 'soil' && <SoilChart linedata={linedata} />}
            {typeGroup === 'wind' && <WindChart linedata={linedata} />}
          </GroupBorder>
        </div>
      </div>
    </div>
  );
}

export default Chart;
