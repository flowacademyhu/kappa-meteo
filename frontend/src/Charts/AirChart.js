import React from 'react';
import GeneralChart from './GeneralChart.js';
import { LineChart } from 'recharts';

const axisLabel = [
  { dataKey: 'airTemperature', value: 'Hőmérséklet C', stroke: '#c54b3c' },
  { dataKey: 'airPressure', value: 'Légnyomás kPa', stroke: '#009900' },
  { dataKey: 'airHumidity', value: 'Páratartalom %', stroke: '#000000' },
];

const labels = [
  { dataKey: 'airTemperature', name: 'Hőmérséklet', stroke: '#c54b3c' },
  { dataKey: 'airPressure', name: 'Légnyomás', stroke: '#009900' },
  { dataKey: 'airHumidity', name: 'Páratartalom', stroke: '#000000' },
];

const AirChart = ({ linedata }) => {
  return (
    <GeneralChart
      linedata={linedata}
      axisLabel={axisLabel}
      labels={labels}
      Chart={LineChart}
    />
  );
};

export default AirChart;
