import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import MyCheckbox from '../Components/Input/MyCheckbox';
import { v4 as uuidv4 } from 'uuid';

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

const MiscChart = ({ linedata, xAxisDateFormat }) => {
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

  return (
    linedata !== null &&
    linedata !== undefined && (
      <>
        <form>
          {measurements.map((measurement, index) => (
            <MyCheckbox
              key={index}
              name={measurement}
              label={measurement}
              changeMeasurement={changeMeasurement}
            />
          ))}
        </form>

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
                  key={uuidv4()}
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
                  key={index}
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
