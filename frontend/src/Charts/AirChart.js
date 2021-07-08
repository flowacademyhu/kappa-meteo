import React from 'react';
import GeneralChart from './GeneralChart.js';

const axisLabel = [
  { dataKey: 'airTemperature1', value: 'Hőmérséklet C', stroke: '#c54b3c' },
  { dataKey: 'airPressure1', value: 'Légnyomás kPa', stroke: '#009900' },
  { dataKey: 'airHumidity1', value: 'Páratartalom %', stroke: '#000000' },
];
const axisLabel2 = [
  { dataKey: 'airTemperature2', value: 'Hőmérséklet C', stroke: '#c54b3c' },
  { dataKey: 'airPressure2', value: 'Légnyomás kPa', stroke: '#009900' },
  { dataKey: 'airHumidity2', value: 'Páratartalom %', stroke: '#000000' },
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

const AirChart = ({ linedata, linedata2 }) => {
  return (
    <GeneralChart
      axisLabel={axisLabel}
      axisLabel2={axisLabel2}
      labels={labels}
      labels2={labels2}
      isLineChart={true}
      linedata={linedata}
      linedata2={linedata2}
    />
  );
};

export default AirChart;
