import React from 'react';
import GeneralChart from './GeneralChart.js';

const axisLabel = [
  {
    dataKey: 'soilMoisture30cm',
    value: 'Talaj nedvesség 30cm C',
    stroke: '#c54b3c',
  },
  {
    dataKey: 'soilMoisture60cm',
    value: 'Talaj nedvesség 60cm C',
    stroke: '#009900',
  },
  {
    dataKey: 'soilMoisture90cm',
    value: 'Talaj nedvesség 90cm C',
    stroke: '#ff9900',
  },
  {
    dataKey: 'soilMoisture120cm',
    value: 'Talaj nedvesség 120cm',
    stroke: '#0066ff',
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
    stroke: '#c54b3c',
  },
  {
    dataKey: 'soilMoisture60cm',
    name: 'Talaj nedvesség 60cm',
    stroke: '#009900',
  },
  {
    dataKey: 'soilMoisture90cm',
    name: 'Talaj nedvesség 90cm',
    stroke: '#ff9900',
  },
  {
    dataKey: 'soilMoisture120cm',
    name: 'Talaj nedvesség 120cm',
    stroke: '#0066ff',
  },
  {
    dataKey: 'soilTemperature0cm',
    name: 'Talaj hőmérséklet 0cm',
    stroke: '#000000',
  },
];

const SoilChart = ({ linedata }) => {
  return (
    <GeneralChart
      linedata={linedata}
      axisLabel={axisLabel}
      labels={labels}
      isLineChart={true}
    />
  );
};

export default SoilChart;
