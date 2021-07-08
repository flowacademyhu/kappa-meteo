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

const GeneralChart = ({
  linedata,
  linedata2,
  axisLabel,
  labels,
  isLineChart,
}) => {
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
  const renameKeys = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
      const transform = (x) => x + num;
      Object.keys(arr[i]).forEach((key) => {
        if (typeof arr[i][key] === 'number') {
          const val = arr[i][key];
          delete arr[i][key];
          arr[i][transform(key)] = val;
        }
      });
    }
    return arr;
  };

  const merge = function (arr1, arr2) {
    if (arr1) {
      renameKeys(arr1, '1');
    }

    if (arr2) {
      renameKeys(arr2, '2');
    }

    let res = [];

    if (arr1 && arr2) {
      for (let i = 0; i < arr1.length; i++) {
        res.push({ ...arr1[i], ...arr2[i] });
      }
    }

    return res;
  };

  let mergedData = {};

  if (linedata && linedata.length > 0 && linedata2 && linedata2.length > 0) {
    mergedData = merge(linedata, linedata2);
  }

  console.log(linedata);

  const Chart = isLineChart ? LineChart : AreaChart;
  const ChartData = isLineChart ? Line : Area;

  return (
    linedata !== null &&
    linedata !== undefined &&
    linedata2 !== null &&
    linedata2 !== undefined && (
      <>
        {console.log()}
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
            data={mergedData}
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
                    key={label.dataKey + '111'}
                    type="monotone"
                    dataKey={label.dataKey + '111'}
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

            {labels.map((label, index) => {
              if (measurementGroup.includes(label.dataKey)) {
                return (
                  <ChartData
                    key={label.dataKey + '222'}
                    type="monotone"
                    dataKey={label.dataKey + '222'}
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
