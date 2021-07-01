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
  'solarCellChargingVoltage',
  'externalBatteryVoltage',
  'internalBatteryVoltage',
];

const axisLabel = [
  { dataKey: 'solarCellChargingVoltage', value: 'Napelem töltő feszültség V' },
  { dataKey: 'externalBatteryVoltage', value: 'Külső akku feszültség V' },
  { dataKey: 'internalBatteryVoltage', value: 'Belső akku feszültség V' },
];

const labels = [
  { dataKey: 'solarCellChargingVoltage', name: 'solarCellChargingVoltage' },
  { dataKey: 'externalBatteryVoltage', name: 'externalBatteryVoltage' },
  { dataKey: 'internalBatteryVoltage', name: 'internalBatteryVoltage' },
];

const BatteryChart = ({ dateState, dateFormat, xAxisDateFormat }) => {
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
          `/api/stations/${station}/battery?start=${dateFormat(
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
                    stroke: '#000000',
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
                  dataKey="solarCellChargingVoltage"
                  name="solarCellChargingVoltage"
                  stroke="#000000"
                  yAxisId={index}
                  dot={false}
                  fill="#8884d8"
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

export default BatteryChart;
