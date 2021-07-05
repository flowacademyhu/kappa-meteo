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
    dataKey: 'solarCellChargingVoltage',
    value: 'Napelem töltő feszültség V',
    stroke: '#c54b3c',
  },
  {
    dataKey: 'externalBatteryVoltage',
    value: 'Külső akku feszültség V',
    stroke: '#009900',
  },
  {
    dataKey: 'internalBatteryVoltage',
    value: 'Belső akku feszültség V',
    stroke: '#000000',
  },
];

const labels = [
  {
    dataKey: 'solarCellChargingVoltage',
    name: 'Napelem töltő feszültség',
    stroke: '#c54b3c',
    fill: '#c54b3c',
  },
  {
    dataKey: 'externalBatteryVoltage',
    name: 'Külső akku feszültség',
    stroke: '#009900',
    fill: '#009900',
  },
  {
    dataKey: 'internalBatteryVoltage',
    name: 'Belső akku feszültség',
    stroke: '#000000',
    fill: '#000000',
  },
];

const BatteryChart = ({ linedata, xAxisDateFormat }) => {
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
                  yAxisId={index}
                  dot={false}
                  fill={label.fill}
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
