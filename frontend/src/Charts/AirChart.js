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

  useEffect(async () => {
    try {
      const response = await axios.get(
        `/api/air?start=${dateFormat(dateState[0].startDate)}&end=${dateFormat(
          dateState[0].endDate
        )}&type=${dataType}&id=${station}`
      );
      const result = response.data;
      const mappedResult = result.map((item, index) => {
        return { ...item, number: index };
      });
      setLineData(mappedResult);
    } catch (err) {
      console.error('Error during api call:', err);
    }
  }, [dataType, station, dateState]);

  return (
    linedata !== null &&
    linedata !== undefined && (
      <>
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
          <label htmlFor="stationId">Choose a Station:</label>
          <select
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
            <option value="DAILY">Daily</option>
            <option value="HOURLY">Hourly</option>
            <option value="TEN_MIN">10 min</option>
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
          <XAxis />
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
