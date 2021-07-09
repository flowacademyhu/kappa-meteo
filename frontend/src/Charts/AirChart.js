import React from 'react';
import GeneralChart from './GeneralChart.js';

const axisLabel = [
  { dataKey: 'airTemperature', value: 'Hőmérséklet C', stroke: '#c54b3c' },
  { dataKey: 'airPressure', value: 'Légnyomás kPa', stroke: '#009900' },
  { dataKey: 'airHumidity', value: 'Páratartalom %', stroke: '#000000' },
];

const labels = [
  {
    dataKey: 'airTemperature',
    name: 'Hőmérséklet',
    stroke: '#c54b3c',
    stroke2: '#0099cc',
  },
  {
    dataKey: 'airPressure',
    name: 'Légnyomás',
    stroke: '#009900',
    stroke2: '#0099cc',
  },
  {
    dataKey: 'airHumidity',
    name: 'Páratartalom',
    stroke: '#000000',
    stroke2: '#0099cc',
  },
];

const AirChart = ({ linedata, linedata2, station }) => {
  return (
    <GeneralChart
      axisLabel={axisLabel}
      labels={labels}
      isLineChart={true}
      linedata={linedata}
      linedata2={linedata2}
      station={station}
    />
  );
};

export default AirChart;
