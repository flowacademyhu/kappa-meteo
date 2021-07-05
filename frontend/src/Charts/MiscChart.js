import React, { useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import MyCheckbox from '../Components/Input/MyCheckbox';
import { v4 as uuidv4 } from 'uuid';

const axisLabel = [
  { dataKey: 'irradiation', value: 'Besugárzás W/m2', stroke: '#c54b3c' },
  { dataKey: 'freeze', value: 'Fagy', stroke: '#009900' },
  { dataKey: 'rain', value: 'Csapadék mm', stroke: '#0066ff' },
  { dataKey: 'leafMoisture', value: 'Levélnedvesség Perc', stroke: '#ff9900' },
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
    stroke: '#c54b3c',
  },
  {
    dataKey: 'freeze',
    name: 'Fagy',
    stroke: '#009900',
  },
  {
    dataKey: 'rain',
    name: 'Csapadék',
    stroke: '#0066ff',
  },
  {
    dataKey: 'leafMoisture',
    name: 'Levél nedvesség',
    stroke: '#ff9900',
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
        <div className="row">
          {labels.map((label, index) => (
            <MyCheckbox
              key={index}
              name={label.dataKey}
              label={label.name}
              changeMeasurement={changeMeasurement}
            />
          ))}
        </div>
        <ResponsiveContainer width="100%" height={500}>
          <LineChart
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
                  <Line
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
          </LineChart>
        </ResponsiveContainer>
      </>
    )
  );
};

export default MiscChart;
