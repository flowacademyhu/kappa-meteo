import React, { useEffect, useState } from 'react';
import {
  AreaChart,
  LineChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import axios from 'axios';
import DropdownMultiselect from 'react-multiselect-dropdown-bootstrap';
import ChartButton from './ChartButton';
import endOfDay from 'date-fns/endOfDay/index';

export default function LineChart2() {
  const [linedata, setLineData] = useState([]);
  const [date, setDate] = useState('HOURLY');
  const [station, setStation] = useState(12);
  const start = '2021.04.01. 13:45';
  const end = '2021.04.13. 19:17';
  const [isAirHumidity, setAirHumidity] = useState(false);
  const [isAirPressure, setAirPressure] = useState(false);
  const [isAirTemperature, setAirTemperature] = useState(false);

  useEffect(async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/api/air?start=${start}&end=${end}&type=${date}&id=${station}`
      );
      const result = response.data;
      const mappedResult = result.map((item, index) => {
        return { ...item, number: index };
      });
      setLineData(mappedResult);
    } catch (err) {
      console.error('Error during api call:', err);
    }
  }, [date, station]);

  const optionsArray2 = [
    { key: 1, label: 'Talaj nedvesség 30 cm' },
    { key: 2, label: 'Talaj nedvesség 60 cm' },
    { key: 3, label: 'Talaj nedvesség 90 cm' },
    { key: 4, label: 'Talaj nedvesség 120 cm' },
  ];

  const airOptions = [
    { key: 1, label: 'Páratartalom' },
    { key: 2, label: 'Légnyomás' },
    { key: 3, label: 'Hőmérséklet' },
  ];

  const optionArray = [
    { id: 1, label: 'Levegő hőmérséklet' },
    { id: 2, label: 'Szél lökés' },
    { id: 3, label: 'Légnyomás' },
    { id: 4, label: 'Levegő nedvesség' },
    { id: 5, label: 'Külső akkufeszültség' },
    { id: 6, label: 'Csapadék' },
    { id: 7, label: 'Szél irány' },
    { id: 8, label: 'Belső akkufeszültség' },
    { id: 9, label: 'Fagy' },
    { id: 10, label: 'Szél sebesség' },
    { id: 11, label: 'Levegő páratartalom' },
    { id: 12, label: 'Fény egység' },
    { id: 13, label: 'Besugárzás' },
    { id: 14, label: 'Napelem töltő feszültség' },
    { id: 15, label: 'Talaj hőmérséklet 0 cm' },
    { id: 16, label: 'Csapadék számláló' },
  ];

  return (
    <>
      {/* <div className="container">
        <div className="row">
          {optionArray.map((e) => {
            return <ChartButton label={e.label} key={e.id}></ChartButton>;
          })}
        </div>
      </div> */}

      <div className="container">
        <div className="row">
          <div className="col-2 p-2">
            <DropdownMultiselect
              options={airOptions}
              buttonClass="btn btn-primary"
              placeholder="Levegő adatok"
            ></DropdownMultiselect>
          </div>

          <div className="col-2 p-2">
            <DropdownMultiselect
              options={optionsArray2}
              buttonClass="btn btn-primary"
              placeholder="Talajnedvesség"
            ></DropdownMultiselect>
          </div>

          <div className="col-2 p-2">
            <DropdownMultiselect
              options={optionsArray2}
              buttonClass="btn btn-primary"
              placeholder="Talajnedvesség"
            ></DropdownMultiselect>
          </div>

          <div className="col-2 p-2">
            <DropdownMultiselect
              options={optionsArray2}
              buttonClass="btn btn-primary"
              placeholder="Talajnedvesség"
            ></DropdownMultiselect>
          </div>

          <div className="col-2 p-2">
            <DropdownMultiselect
              options={optionsArray2}
              buttonClass="btn btn-primary"
              placeholder="Talajnedvesség"
            ></DropdownMultiselect>
          </div>
        </div>
      </div>
      <form>
        <input
          type="checkbox"
          name="AirTemperature"
          value="airTemperature"
          onChange={() => setAirTemperature(!isAirTemperature)}
          checked={isAirTemperature}
        />
        <label htmlFor="AirTemperature"> AirTemperature </label>
        <input
          type="checkbox"
          name="AirPressure"
          value="AirPressure"
          onChange={() => setAirPressure(!isAirPressure)}
          checked={isAirPressure}
        />
        <label htmlFor="AirPressure"> AirPressure </label>
        <input
          type="checkbox"
          name="AirHumidity"
          value="AirHumidity"
          onChange={() => setAirHumidity(!isAirHumidity)}
          checked={isAirHumidity}
        />
        <label htmlFor="AirHumidity"> AirHumidity</label>
      </form>

      <div className="container p-3 m-3">
        <label htmlFor="dateTime">Choose a date:</label>
        <select
          name="dateTime"
          id="datetime"
          onChange={(e) => setDate(e.target.value)}
        >
          <option value="DAILY">Daily</option>
          <option value="HOURLY">Hourly</option>
          <option value="TEN_MIN">10 min</option>
        </select>
      </div>
      <div className="container p-3 m-3">
        <label htmlFor="stationId">Choose a Station:</label>
        <select
          name="stations"
          id="stations"
          onChange={(e) => setStation(e.target.value)}
        >
          <option value="12">Szeged</option>
        </select>
      </div>
      {linedata !== null && linedata !== undefined && (
        <div className="container align-items-center justify-content-center p-3">
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <AreaChart
                width={1000}
                height={500}
                data={linedata}
                margin={{
                  top: 25,
                  right: 60,
                  left: 40,
                  bottom: 20,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="number" />
                <Tooltip />
                <Legend />
                {isAirTemperature && (
                  <Area
                    type="monotone"
                    dataKey="airTemperature"
                    name="Hőmérséklet"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                    dot={false}
                    yAxisId={0}
                    fill="#111"
                  />
                )}
                {isAirPressure && (
                  <Area
                    type="monotone"
                    dataKey="airPressure"
                    name="Légnyomás"
                    stroke="#82ca9d"
                    yAxisId={1}
                    dot={false}
                    fill="#111"
                  />
                )}
                {isAirHumidity && (
                  <Area
                    type="monotone"
                    dataKey="airHumidity"
                    name="Páratartalom"
                    stroke="#000000"
                    yAxisId={2}
                    dot={false}
                    fill="#8884d8"
                  />
                )}
              </AreaChart>
            </div>
            <div className="col"></div>
          </div>
        </div>
      )}
    </>
  );
}
