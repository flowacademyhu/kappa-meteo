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

const WindChart = ({ dateState, dateFormat }) => {
  const [linedata, setLineData] = useState([]);
  const [dataType, setDataType] = useState('DAILY');
  const [station, setStation] = useState(12);
  const [isWindSpeed, setWindSpeed] = useState(false);
  const [isWindDirection, setWindDirection] = useState(false);
  const [isWindGust, setWindGust] = useState(true);

  useEffect(async () => {
    try {
      const response = await axios.get(
        `/api/wind?start=${dateFormat(dateState[0].startDate)}&end=${dateFormat(
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
            name="windSpeed"
            value="windSpeed"
            onChange={() => setWindSpeed(!isWindSpeed)}
            checked={isWindSpeed}
          />
          <label htmlFor="windSpeed"> windSpeed </label>
          <input
            type="checkbox"
            name="windDirection"
            value="windDirection"
            onChange={() => setWindDirection(!isWindDirection)}
            checked={isWindDirection}
          />
          <label htmlFor="windDirection"> windDirection </label>
          <input
            type="checkbox"
            name="windGust"
            value="windGust"
            onChange={() => setWindGust(!isWindGust)}
            checked={isWindGust}
          />
          <label htmlFor="windGust"> windGust</label>
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
          <XAxis dataKey="date" />
          {isWindSpeed && (
            <YAxis
              className="mx-5"
              yAxisId="0"
              orientation="left"
              dataKey="windSpeed"
              label={{
                value: 'Szélsebesség km/h',
                angle: -90,
                dx: -15,
                position: 'outsideLeft',
                stroke: '#8884d8',
              }}
            />
          )}
          {isWindDirection && (
            <YAxis
              className="mx-5"
              yAxisId="1"
              orientation="left"
              dataKey="windDirection"
              label={{
                value: 'Szélirány',
                angle: -90,
                dx: -15,
                position: 'outsideLeft',
                stroke: '#82ca9d',
              }}
            />
          )}
          {isWindGust && (
            <YAxis
              className="mx-5"
              yAxisId="2"
              orientation="left"
              dataKey="windGust"
              label={{
                value: 'Széllökés km/h',
                angle: -90,
                dx: -15,
                position: 'outsideLeft',
                stroke: '#000000',
              }}
            />
          )}
          <Tooltip />
          <Legend />
          {isWindSpeed && (
            <Area
              type="monotone"
              dataKey="windSpeed"
              name="Szél sebesség"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              dot={false}
              yAxisId={0}
              fill="#111"
            />
          )}
          {isWindDirection && (
            <Area
              type="monotone"
              dataKey="windDirection"
              name="Szél irány"
              stroke="#82ca9d"
              yAxisId={1}
              dot={false}
              fill="#111"
            />
          )}
          {isWindGust && (
            <Area
              type="monotone"
              dataKey="windGust"
              name="Szél lökés"
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

export default WindChart;
