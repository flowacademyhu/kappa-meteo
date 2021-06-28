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

const MiscChart = ({ dateState, dateFormat }) => {
  const [linedata, setLineData] = useState([]);
  const [dataType, setDataType] = useState('DAILY');
  const [station, setStation] = useState(12);
  const start = '2021.04.01. 13:45';
  const end = '2021.04.13. 19:17';
  const [isIrradiation, setIrradiation] = useState(true);
  const [isFreeze, setFreeze] = useState(false);
  const [isRain, setRain] = useState(false);
  const [isLeafMoisture, setLeafMoisture] = useState(false);
  const [isLightUnit, setLightUnit] = useState(false);
  const [isPrecipitationCounter, setPrecipitationCounter] = useState(false);

  useEffect(async () => {
    try {
      const response = await axios.get(
        `/api/misc?start=${dateFormat(dateState[0].startDate)}&end=${dateFormat(
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
  }, [dataType, station]);

  return (
    linedata !== null &&
    linedata !== undefined && (
      <>
        <form>
          <input
            type="checkbox"
            name="irradiation"
            value="irradiation"
            onChange={() => setIrradiation(!isIrradiation)}
            checked={isIrradiation}
          />
          <label htmlFor="irradiation"> irradiation </label>
          <input
            type="checkbox"
            name="freeze"
            value="freeze"
            onChange={() => setFreeze(!isFreeze)}
            checked={isFreeze}
          />
          <label htmlFor="freeze"> freeze </label>
          <input
            type="checkbox"
            name="rain"
            value="rain"
            onChange={() => setRain(!isRain)}
            checked={isRain}
          />
          <label htmlFor="rain"> rain</label>
          <input
            type="checkbox"
            name="leafMoisture"
            value="leafMoisture"
            onChange={() => setLeafMoisture(!isLeafMoisture)}
            checked={isLeafMoisture}
          />
          <label htmlFor="leafMoisture"> leafMoisture </label>
          <input
            type="checkbox"
            name="lightUnit"
            value="lightUnit"
            onChange={() => setLightUnit(!isLightUnit)}
            checked={isLightUnit}
          />
          <label htmlFor="lightUnit"> lightUnit </label>
          <input
            type="checkbox"
            name="precipitationCounter"
            value="precipitationCounter"
            onChange={() => setPrecipitationCounter(!isPrecipitationCounter)}
            checked={isPrecipitationCounter}
          />
          <label htmlFor="precipitationCounter"> precipitationCounter </label>
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
          {isIrradiation && (
            <Area
              type="monotone"
              dataKey="irradiation"
              name="Besugárzás"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              dot={false}
              yAxisId={0}
              fill="#111"
            />
          )}
          {isFreeze && (
            <Area
              type="monotone"
              dataKey="freeze"
              name="Fagy"
              stroke="#82ca9d"
              yAxisId={1}
              dot={false}
              fill="#111"
            />
          )}
          {isRain && (
            <Area
              type="monotone"
              dataKey="rain"
              name="Csapadék"
              stroke="#000000"
              yAxisId={2}
              dot={false}
              fill="#8884d8"
            />
          )}
          {isLeafMoisture && (
            <Area
              type="monotone"
              dataKey="leafMoisture"
              name="Levél nedvesség"
              stroke="#000000"
              yAxisId={3}
              dot={false}
              fill="#8884d8"
            />
          )}
          {isLightUnit && (
            <Area
              type="monotone"
              dataKey="lightUnit"
              name="Fény egység"
              stroke="#000000"
              yAxisId={4}
              dot={false}
              fill="#8884d8"
            />
          )}
          {isPrecipitationCounter && (
            <Area
              type="monotone"
              dataKey="precipitationCounter"
              name="Csapadék számláló"
              stroke="#000000"
              yAxisId={5}
              dot={false}
              fill="#8884d8"
            />
          )}
        </AreaChart>
      </>
    )
  );
};

export default MiscChart;
