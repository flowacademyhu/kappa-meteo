import React from 'react';
import GeneralChart from './GeneralChart.js';

const axisLabel = [
  { dataKey: 'irradiation', value: 'Besugárzás W/m2', stroke: '#c54b3c' },
  { dataKey: 'freeze', value: 'Fagy', stroke: '#009900' },
  { dataKey: 'rain', value: 'Csapadék mm', stroke: '#0066ff' },
  { dataKey: 'leafMoisture', value: 'Levélnedvesség Perc', stroke: '#ff9900' },
  { dataKey: 'lightUnit', value: 'Fény egység cd', stroke: '#000000' },
  {
    dataKey: 'precipitationCounter',
    value: 'Csapadék számláló mm',
    stroke: '#000000',
  },
];

const labels = [
  {
    dataKey: 'irradiation',
    name: 'Besugárzás',
    stroke: '#c54b3c',
  },
  {
    dataKey: 'freeze',
    name: 'Fagy',
    stroke: '#009900',
  },
  {
    dataKey: 'rain',
    name: 'Csapadék',
    stroke: '#0066ff',
  },
  {
    dataKey: 'leafMoisture',
    name: 'Levél nedvesség',
    stroke: '#ff9900',
  },
  {
    dataKey: 'lightUnit',
    name: 'Fény egység',
    stroke: '#000000',
  },
  {
    dataKey: 'precipitationCounter',
    name: 'Csapadék számláló',
    stroke: '#000000',
  },
];

const MiscChart = ({ linedata }) => {
  return (
    <GeneralChart
      linedata={linedata}
      axisLabel={axisLabel}
      labels={labels}
      isLineChart={true}
    />
  );
};

export default MiscChart;
