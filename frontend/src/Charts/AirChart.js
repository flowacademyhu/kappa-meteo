import React, { useEffect, useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import axios from 'axios';

const AirChart = ({ dateState, dateFormat }) => {
  const [linedata, setLineData] = useState([]);
  const [dataType, setDataType] = useState('DAILY');
  const [station, setStation] = useState(12);
  const [isAirHumidity, setAirHumidity] = useState(false);
  const [isAirPressure, setAirPressure] = useState(false);
  const [isAirTemperature, setAirTemperature] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = {
          startDate: dateFormat(dateState[0].startDate),
          endDate: dateFormat(dateState[0].endDate),
          type: dataType,
          id: station,
        };
        const response = await axios.post('/api/air', data);
        const mappedResult = response.data.map((item, index) => {
          return { ...item, number: index };
        });
        setLineData(mappedResult);
      } catch (err) {
        console.error('Error during api call:', err);
      }
    }
    fetchData();
  }, [dataType, station, dateState, dateFormat]);

  return (
    linedata !== null &&
    linedata !== undefined && (
      <>
        <form>
          <input
            type="checkbox"
            name="AirTemperature"
            onChange={() => setAirTemperature(!isAirTemperature)}
            checked={isAirTemperature}
          />
          <label htmlFor="AirTemperature"> AirTemperature </label>
          <input
            type="checkbox"
            name="AirPressure"
            onChange={() => setAirPressure(!isAirPressure)}
            checked={isAirPressure}
          />
          <label htmlFor="AirPressure"> AirPressure </label>
          <input
            type="checkbox"
            name="AirHumidity"
            onChange={() => setAirHumidity(!isAirHumidity)}
            checked={isAirHumidity}
          />
          <label htmlFor="AirHumidity"> AirHumidity</label>
        </form>
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
          <XAxis dataKey="date" />
          {isAirTemperature && (
            <YAxis
              className="mx-5"
              yAxisId="0"
              orientation="left"
              dataKey="airTemperature"
              label={{
                value: 'Hőmérséklet C',
                angle: -90,
                dx: -15,
                position: 'outsideLeft',
                stroke: '#8884d8',
              }}
            />
          )}
          {isAirPressure && (
            <YAxis
              className="mx-5"
              yAxisId="1"
              orientation="left"
              dataKey="airPressure"
              label={{
                value: 'Légnyomás kPa',
                angle: -90,
                dx: -15,
                position: 'outsideLeft',
                stroke: '#82ca9d',
              }}
            />
          )}
          {isAirHumidity && (
            <YAxis
              className="mx-5"
              yAxisId="2"
              orientation="left"
              dataKey="airHumidity"
              label={{
                value: 'Páratartalom %',
                angle: -90,
                dx: -15,
                position: 'outsideLeft',
                stroke: '#000000',
              }}
            />
          )}
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
      </>
    )
  );
};

export default AirChart;
