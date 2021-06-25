import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import axios from 'axios';
import ChartButton from './ChartButton';

export default function LineChart2() {
  const [linedata, setLineData] = useState([]);
  const [date, setDate] = useState('');
  const [station, setStation] = useState(12);
  //http://localhost:8080/test2?id=12&type=DAILY

  useEffect(async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/test2?id=` + station + `&type=` + date
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
  console.log(linedata);

  const optionsArray = [{ key: 1, label: 'Levegő hőmérséklet' }];
  const optionsArray2 = [
    { key: 1, label: 'Talaj nedvesség 30 cm' },
    { key: 2, label: 'Talaj nedvesség 60 cm' },
    { key: 3, label: 'Talaj nedvesség 90 cm' },
    { key: 4, label: 'Talaj nedvesség 120 cm' },
  ];
  const optionsArray3 = [{ key: 1, label: 'Szél lökés' }];
  const optionsArray4 = [{ key: 1, label: 'Légnyomás' }];
  const optionsArray5 = [{ key: 1, label: 'Levegő nedvesség' }];
  const optionsArray6 = [{ key: 1, label: 'Külső akkufeszültség' }];
  const optionsArray7 = [{ key: 1, label: 'Csapadék' }];
  const optionsArray8 = [{ key: 1, label: 'Szél irány' }];
  const optionsArray9 = [{ key: 1, label: 'Belső akkufeszültség' }];
  const optionsArray10 = [{ key: 1, label: 'Fagy' }];
  const optionsArray11 = [{ key: 1, label: 'Szél sebesség' }];
  const optionsArray12 = [{ key: 1, label: 'Levegő páratartalom' }];
  const optionsArray13 = [{ key: 1, label: 'Fény egység' }];
  const optionsArray14 = [{ key: 1, label: 'Besugárzás' }];
  const optionsArray15 = [{ key: 1, label: 'Napelem töltő feszültség' }];
  const optionsArray16 = [{ key: 1, label: 'Talaj hőmérséklet 0 cm' }];
  const optionsArray17 = [{ key: 1, label: 'Csapadék számláló' }];

  return (
    <>
      <div className="container">
        <div className="row">
          <ChartButton
            placeholder="Levegő hőmérséklet"
            options={optionsArray}
          ></ChartButton>
          <ChartButton
            placeholder="Talaj nedvesség"
            options={optionsArray2}
          ></ChartButton>

          <ChartButton
            placeholder="Szél lökés"
            options={optionsArray3}
          ></ChartButton>
          <ChartButton
            placeholder="Légnyomás"
            options={optionsArray4}
          ></ChartButton>
          <ChartButton
            placeholder="Levegő nedvesség"
            options={optionsArray5}
          ></ChartButton>
          <ChartButton
            placeholder="Külső akkufeszültség"
            options={optionsArray6}
          ></ChartButton>
        </div>
        <div className="row">
          <ChartButton
            placeholder="Csapadék"
            options={optionsArray7}
          ></ChartButton>
          <ChartButton
            placeholder="Szél irány"
            options={optionsArray8}
          ></ChartButton>
          <ChartButton
            placeholder="Belső akkufeszültség"
            options={optionsArray9}
          ></ChartButton>
          <ChartButton
            placeholder="Fagy"
            options={optionsArray10}
          ></ChartButton>
          <ChartButton
            placeholder="Szél sebesség"
            options={optionsArray11}
          ></ChartButton>
          <ChartButton
            placeholder="Levegő páratartalom"
            options={optionsArray12}
          ></ChartButton>
        </div>
        <div className="row">
          <ChartButton
            placeholder="Fény egység"
            options={optionsArray13}
          ></ChartButton>
          <ChartButton
            placeholder="Besugárzás"
            options={optionsArray14}
          ></ChartButton>
          <ChartButton
            placeholder="Napelem töltő feszültség"
            options={optionsArray15}
          ></ChartButton>
          <ChartButton
            placeholder="Talaj hőmérséklet 0 cm"
            options={optionsArray16}
          ></ChartButton>
          <ChartButton
            placeholder="Csapadék számláló"
            options={optionsArray17}
          ></ChartButton>
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
      {linedata !== null && linedata !== undefined && (
        <div className="container align-items-center justify-content-center p-3">
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <LineChart
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
                <Line
                  type="monotone"
                  dataKey="airTemperature"
                  name="Hőmérséklet"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                  yAxisId={0}
                />
                <Line
                  type="monotone"
                  dataKey="airPressure"
                  name="Légnyomás"
                  stroke="#82ca9d"
                  yAxisId={1}
                />
                <Line
                  type="monotone"
                  dataKey="airHumidity"
                  name="Páratartalom"
                  stroke="#000000"
                  yAxisId={2}
                />
              </LineChart>
            </div>
            <div className="col"></div>
          </div>
        </div>
      )}
    </>
  );
}
