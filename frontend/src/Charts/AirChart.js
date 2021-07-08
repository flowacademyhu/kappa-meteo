import React from 'react';
import GeneralChart from './GeneralChart.js';

const axisLabel = [
  { dataKey: 'airTemperature', value: 'Hőmérséklet C', stroke: '#c54b3c' },
  { dataKey: 'airPressure', value: 'Légnyomás kPa', stroke: '#009900' },
  { dataKey: 'airHumidity', value: 'Páratartalom %', stroke: '#000000' },
];

const labels = [
  { dataKey: 'airTemperature1', name: 'Hőmérséklet', stroke: '#c54b3c' },
  { dataKey: 'airPressure1', name: 'Légnyomás', stroke: '#009900' },
  { dataKey: 'airHumidity1', name: 'Páratartalom', stroke: '#000000' },
];

const labels2 = [
  { dataKey: 'airTemperature2', name: 'Hőmérséklet', stroke: '#c54b3c' },
  { dataKey: 'airPressure2', name: 'Légnyomás', stroke: '#009900' },
  { dataKey: 'airHumidity2', name: 'Páratartalom', stroke: '#000000' },
];

const AirChart = ({ mergedData }) => {
  return (
    <GeneralChart
      axisLabel={axisLabel}
      labels={labels}
      labels2={labels2}
      isLineChart={true}
      mergedData={mergedData}
    />
  );
};

export default AirChart;
