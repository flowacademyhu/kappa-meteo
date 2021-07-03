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

const SoilChart = ({ linedata, xAxisDateFormat }) => {
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
        <AreaChart
          width={1300}
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

export default SoilChart;