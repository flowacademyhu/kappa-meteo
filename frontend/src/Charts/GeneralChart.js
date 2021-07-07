import React, { useState } from 'react';
import {
  ResponsiveContainer,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  LineChart,
} from 'recharts';
import MyCheckbox from '../Components/Input/MyCheckbox';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

const xAxisDateFormat = (date) => {
  return moment(date).format('MM-DD');
};

const GeneralChart = ({ linedata, axisLabel, labels, isLineChart }) => {
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

  const Chart = isLineChart ? LineChart : AreaChart;
  const ChartData = isLineChart ? Line : Area;

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
          <Chart
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
                  <ChartData
                    key={index}
                    type="monotone"
                    dataKey={label.dataKey}
                    name={label.name}
                    stroke={label.stroke}
                    activeDot={{ r: 8 }}
                    dot={false}
                    yAxisId={index}
                    fill="#462"
                  />
                );
              }
              return null;
            })}
          </Chart>
        </ResponsiveContainer>
      </>
    )
  );
};

export default GeneralChart;
