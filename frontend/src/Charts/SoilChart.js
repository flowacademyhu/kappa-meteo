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

const SoilChart = ({ dateState, dateFormat }) => {
  const [linedata, setLineData] = useState([]);
  const [dataType, setDataType] = useState('DAILY');
  const [station, setStation] = useState(12);
  const [isSoilMoisture30cm, setSoilMoisture30cm] = useState(true);
  const [isSoilMoisture60cm, setSoilMoisture60cm] = useState(false);
  const [isSoilMoisture90cm, setSoilMoisture90cm] = useState(false);
  const [isSoilMoisture120cm, setSoilMoisture120cm] = useState(false);
  const [isSoilTemperature0cm, setSoilTemperature0cm] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = {
          startDate: dateFormat(dateState[0].startDate),
          endDate: dateFormat(dateState[0].endDate),
          type: dataType,
          id: station,
        };
        const response = await axios.post(`/api/soil`, data);
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
            name="soilMoisture30cm"
            onChange={() => setSoilMoisture30cm(!isSoilMoisture30cm)}
            checked={isSoilMoisture30cm}
          />
          <label htmlFor="soilMoisture30cm"> soilMoisture30cm </label>
          <input
            type="checkbox"
            name="SoilMoisture60cm"
            onChange={() => setSoilMoisture60cm(!isSoilMoisture60cm)}
            checked={isSoilMoisture60cm}
          />
          <label htmlFor="soilMoisture60cm"> soilMoisture90cm </label>
          <input
            type="checkbox"
            name="soilMoisture90cm"
            onChange={() => setSoilMoisture90cm(!isSoilMoisture90cm)}
            checked={isSoilMoisture90cm}
          />
          <label htmlFor="soilMoisture90cm"> soilMoisture90cm</label>
          <input
            type="checkbox"
            name="soilMoisture120cm"
            onChange={() => setSoilMoisture120cm(!isSoilMoisture120cm)}
            checked={isSoilMoisture120cm}
          />
          <label htmlFor="soilMoisture120cm"> soilMoisture120cm</label>
          <input
            type="checkbox"
            name="soilTemperature0cm"
            onChange={() => setSoilTemperature0cm(!isSoilTemperature0cm)}
            checked={isSoilTemperature0cm}
          />
          <label htmlFor="soilTemperature0cm"> soilTemperature0cm</label>
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
          {isSoilMoisture30cm && (
            <YAxis
              className="mx-5"
              yAxisId="0"
              orientation="left"
              dataKey="soilMoisture30cm"
              label={{
                value: 'Talaj nedvesség 30cm C',
                angle: -90,
                dx: -15,
                position: 'outsideLeft',
                stroke: '#8884d8',
              }}
            />
          )}
          {isSoilMoisture60cm && (
            <YAxis
              className="mx-5"
              yAxisId="1"
              orientation="left"
              dataKey="soilMoisture60cm"
              label={{
                value: 'Talaj nedvesség 60cm C',
                angle: -90,
                dx: -15,
                position: 'outsideLeft',
                stroke: '#82ca9d',
              }}
            />
          )}
          {isSoilMoisture90cm && (
            <YAxis
              className="mx-5"
              yAxisId="2"
              orientation="left"
              dataKey="soilMoisture90cm"
              label={{
                value: 'Talaj nedvesség 90cm C',
                angle: -90,
                dx: -15,
                position: 'outsideLeft',
                stroke: '#000000',
              }}
            />
          )}
          {isSoilMoisture120cm && (
            <YAxis
              className="mx-5"
              yAxisId="3"
              orientation="left"
              dataKey="soilMoisture120cm"
              label={{
                value: 'Talaj nedvesség 120cm',
                angle: -90,
                dx: -15,
                position: 'outsideLeft',
                stroke: '#000000',
              }}
            />
          )}
          {isSoilTemperature0cm && (
            <YAxis
              className="mx-5"
              yAxisId="4"
              orientation="left"
              dataKey="soilTemperature0cm"
              label={{
                value: 'Talaj hőmérséklet 0cm C',
                angle: -90,
                dx: -15,
                position: 'outsideLeft',
                stroke: '#000000',
              }}
            />
          )}
          <Tooltip />
          <Legend />
          {isSoilMoisture30cm && (
            <Area
              type="monotone"
              dataKey="soilMoisture30cm"
              name="Talaj nedvesség 30cm"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              dot={false}
              yAxisId={0}
              fill="#111"
            />
          )}
          {isSoilMoisture60cm && (
            <Area
              type="monotone"
              dataKey="soilMoisture60cm"
              name="Talaj nedvesség 60cm"
              stroke="#82ca9d"
              yAxisId={1}
              dot={false}
              fill="#111"
            />
          )}
          {isSoilMoisture90cm && (
            <Area
              type="monotone"
              dataKey="soilMoisture90cm"
              name="Talaj nedvesség 90cm"
              stroke="#000000"
              yAxisId={2}
              dot={false}
              fill="#8884d8"
            />
          )}
          {isSoilMoisture120cm && (
            <Area
              type="monotone"
              dataKey="soilMoisture120cm"
              name="Talaj nedvesség 120cm"
              stroke="#000000"
              yAxisId={3}
              dot={false}
              fill="#8884d8"
            />
          )}
          {isSoilTemperature0cm && (
            <Area
              type="monotone"
              dataKey="soilTemperature0cm"
              name="Talaj hőmérséklet 0cm"
              stroke="#000000"
              yAxisId={4}
              dot={false}
              fill="#8884d8"
            />
          )}
        </AreaChart>
      </>
    )
  );
};

export default SoilChart;
