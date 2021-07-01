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
import MyCheckbox from '../Components/Input/MyCheckbox';

const measurements = [
  'soilMoisture30cm',
  'soilMoisture60cm',
  'soilMoisture90cm',
  'soilMoisture120cm',
  'soilTemperature0cm',
];

const axisLabel = [
  {
    dataKey: 'soilMoisture30cm',
    value: 'Talaj nedvesség 30cm C',
    stroke: '#8884d8',
  },
  {
    dataKey: 'soilMoisture60cm',
    value: 'Talaj nedvesség 60cm C',
    stroke: '#82ca9d',
  },
  {
    dataKey: 'soilMoisture90cm',
    value: 'Talaj nedvesség 90cm C',
    stroke: '#000000',
  },
  {
    dataKey: 'soilMoisture120cm',
    value: 'Talaj nedvesség 120cm',
    stroke: '#000000',
  },
  {
    dataKey: 'soilTemperature0cm',
    value: 'Talaj hőmérséklet 0cm C',
    stroke: '#000000',
  },
];

const labels = [
  {
    dataKey: 'soilMoisture30cm',
    name: 'Talaj nedvesség 30cm',
    stroke: '#8884d8',
  },
  {
    dataKey: 'soilMoisture60cm',
    name: 'Talaj nedvesség 60cm',
    stroke: '#82ca9d',
  },
  {
    dataKey: 'soilMoisture90cm',
    name: 'Talaj nedvesség 90cm',
    stroke: '#000000',
  },
  {
    dataKey: 'soilMoisture120cm',
    name: 'Talaj nedvesség 120cm',
    stroke: '#000000',
  },
  {
    dataKey: 'soilTemperature0cm',
    name: 'Talaj hőmérséklet 0cm',
    stroke: '#000000',
  },
];

const SoilChart = ({ dateState, dateFormat, xAxisDateFormat }) => {
  const [linedata, setLineData] = useState([]);
  const [dataType, setDataType] = useState('DAILY');
  const [station, setStation] = useState(12);
  const [measurementGroup, setMeasurementGroup] = useState([]);

  const changeMeasurement = (data) => {
    if (measurementGroup !== null && measurementGroup !== undefined) {
      if (measurementGroup.includes(data)) {
        let newMeasurementGroup = measurementGroup.filter((e) => e !== data);
        setMeasurementGroup(newMeasurementGroup);
      } else {
        setMeasurementGroup([...measurementGroup, data]);
      }
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `/api/stations/${station}/soil?start=${dateFormat(
            dateState[0].startDate
          )}&end=${dateFormat(dateState[0].endDate)}&type=${dataType}`
        );
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
          {measurements.map((measurement) => (
            <MyCheckbox
              name={measurement}
              label={measurement}
              changeMeasurement={changeMeasurement}
            />
          ))}
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
          <XAxis dataKey="date" tickFormatter={xAxisDateFormat} />

          {axisLabel.map((axis, index) => {
            if (measurementGroup.includes(axis.dataKey)) {
              return (
                <YAxis
                  className="mx-5"
                  yAxisId={index}
                  orientation="left"
                  dataKey={axis.dataKey}
                  label={{
                    value: axis.value,
                    angle: -90,
                    dx: -15,
                    position: 'outsideLeft',
                    stroke: axis.stroke,
                  }}
                />
              );
            }
            return null;
          })}
          <Tooltip />
          <Legend />
          {labels.map((label, index) => {
            if (measurementGroup.includes(label.dataKey)) {
              return (
                <Area
                  type="monotone"
                  dataKey={label.dataKey}
                  name={label.name}
                  stroke={label.stroke}
                  activeDot={{ r: 8 }}
                  dot={false}
                  yAxisId={index}
                  fill="#111"
                />
              );
            }
            return null;
          })}
        </AreaChart>
      </>
    )
  );
};

export default SoilChart;
