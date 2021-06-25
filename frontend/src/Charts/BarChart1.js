import React, { PureComponent, useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import axios from 'axios';
import DropdownMultiselect from 'react-multiselect-dropdown-bootstrap';
import ChartButton from './ChartButton';

/*const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    dv: 500,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    dv: 500,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    dv: 500,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    dv: 500,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    dv: 500,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    dv: 500,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    dv: 500,
    amt: 2100,
  },
];
*/
const optionsArray2 = [
  { key: 1, label: 'Talaj nedvesség 30 cm' },
  { key: 2, label: 'Talaj nedvesség 60 cm' },
  { key: 3, label: 'Talaj nedvesség 90 cm' },
  { key: 4, label: 'Talaj nedvesség 120 cm' },
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

export default function BarChart1() {
  const [data, setData] = useState([]);
  const [date, setDate] = useState('');
  const [station, setStation] = useState(12);

  /*useEffect(async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/test/12`);
      setData(response.data.airData);
      console.log(response);
    } catch (err) {
      console.error('Error during api call:', err);
    }
  }, []);
  console.log(data);
  */

  useEffect(async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/test2?id=` + station + `&type=` + date
      );
      const result = response.data;
      const mappedResult = result.map((item, index) => {
        return { ...item, number: index };
      });
      setData(mappedResult);
    } catch (err) {
      console.error('Error during api call:', err);
    }
  }, [date, station]);
  console.log(data);

  return (
    <>
      <div className="container">
        <div className="row">
          {optionArray.map((e) => {
            return <ChartButton label={e.label} key={e.id}></ChartButton>;
          })}
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-2 p-2">
            <DropdownMultiselect
              options={optionsArray2}
              buttonClass="btn btn-primary"
              placeholder="Talajnedvesség"
            ></DropdownMultiselect>
          </div>
        </div>
      </div>
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
      {data !== null && data !== undefined && (
        <div className="container align-items-center justify-content-center p-3">
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <BarChart
                width={1000}
                height={500}
                data={data}
                margin={{
                  top: 25,
                  right: 60,
                  left: 40,
                  bottom: 20,
                }}
              >
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey="number" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="airPressure" fill="#8884d8" />
                <Bar dataKey="airHumidity" fill="#82ca9d" />
                <Bar dataKey="airTemperature" fill="#12bc5a" />
              </BarChart>
            </div>
            <div className="col"></div>
          </div>
        </div>
      )}
    </>
  );
}
