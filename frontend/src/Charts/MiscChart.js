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
  'irradiation',
  'freeze',
  'rain',
  'leafMoisture',
  'lightUnit',
  'precipitationCounter',
];

const axisLabel = [
  { dataKey: 'irradiation', value: 'Besugárzás W/m2', stroke: '#8884d8' },
  { dataKey: 'freeze', value: 'Fagy', stroke: '#82ca9d' },
  { dataKey: 'rain', value: 'Csapadék mm', stroke: '#000000' },
  { dataKey: 'leafMoisture', value: 'Levélnedvesség Perc', stroke: '#000000' },
  { dataKey: 'lightUnit', value: 'Fény egység cd', stroke: '#000000' },
  {
    dataKey: 'precipitationCounter',
    value: 'Csapadék számláló mm',
    stroke: '#000000',
  },
];

const labels = [
  {
    dataKey: 'irradiation',
    name: 'Besugárzás',
    stroke: '#8884d8',
  },
  {
    dataKey: 'freeze',
    name: 'Fagy',
    stroke: '#82ca9d',
  },
  {
    dataKey: 'rain',
    name: 'Csapadék',
    stroke: '#000000',
  },
  {
    dataKey: 'leafMoisture',
    name: 'Levél nedvesség',
    stroke: '#000000',
  },
  {
    dataKey: 'lightUnit',
    name: 'Fény egység',
    stroke: '#000000',
  },
  {
    dataKey: 'precipitationCounter',
    name: 'Csapadék számláló',
    stroke: '#000000',
  },
];

const MiscChart = ({
  dateState,
  dateFormat,
  xAxisDateFormat,
  chartDateFormat,
}) => {
  const [linedata, setLineData] = useState(null);
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
          `/api/stations/${station}/misc?start=${dateFormat(
            dateState[0].startDate
          )}&end=${dateFormat(dateState[0].endDate)}&type=${dataType}`
        );
        const mappedResult = response.data
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
  }, [dataType, station, dateState, dateFormat, chartDateFormat]);

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

export default MiscChart;
