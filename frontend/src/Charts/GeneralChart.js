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
  axisLabel,
  labels,
  isLineChart,
  linedata,
  linedata2,
  station,
}) => {
  const [measurementGroup, setMeasurementGroup] = useState([]);

  const renameKeys = (data, num) => {
    let stationData = data.map((stationDataPoint) => {
      let mappedData = {};
      Object.keys(stationDataPoint).forEach((key) => {
        if (typeof stationDataPoint[key] === 'number') {
          const val = stationDataPoint[key];
          mappedData[key + num] = val;
        } else {
          mappedData[key] = stationDataPoint[key];
        }
      });
      return mappedData;
    });
    return stationData;
  };

  const merge = (firstStationData, secondStationData) => {
    const processedFirstData = renameKeys(firstStationData, '1');
    const processedSecondData = renameKeys(secondStationData, '2');
    let mergedData = [];
    for (let i = 0; i < processedFirstData.length; i++) {
      mergedData.push({ ...processedFirstData[i], ...processedSecondData[i] });
    }
    return mergedData;
  };

  const mergedData = merge(linedata, linedata2);

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
                  key={label.dataKey + '1'}
                  type="monotone"
                  dataKey={label.dataKey + '1'}
                  name={label.name + ' ' + station[0].name}
                  stroke={label.stroke}
                  activeDot={{ r: 8 }}
                  dot={false}
                  yAxisId={index}
                  fill="#462"
                  strokeWidth={4}
                />
              );
            }
            return null;
          })}
          {labels.map((label, index) => {
            if (measurementGroup.includes(label.dataKey)) {
              return (
                <ChartData
                  key={label.dataKey + '2'}
                  type="monotone"
                  dataKey={label.dataKey + '2'}
                  name={label.name + ' ' + station[0].name}
                  stroke={label.stroke2}
                  activeDot={{ r: 8 }}
                  dot={false}
                  yAxisId={index}
                  fill="#462"
                  strokeWidth={4}
                />
              );
            }
            return null;
          })}
        </Chart>
      </ResponsiveContainer>
    </>
  );
};

export default GeneralChart;
