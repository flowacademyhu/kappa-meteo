import React from 'react';
import GeneralChart from './GeneralChart.js';

const axisLabel = [
  { dataKey: 'irradiation', value: 'Besugárzás W/m2', stroke: '#c54b3c' },
  { dataKey: 'freeze', value: 'Fagy', stroke: '#009900' },
  { dataKey: 'rain', value: 'Csapadék mm', stroke: '#cc00ff' },
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
    stroke2: '#0099cc',
  },
  {
    dataKey: 'freeze',
    name: 'Fagy',
    stroke: '#009900',
    stroke2: '#0099cc',
  },
  {
    dataKey: 'rain',
    name: 'Csapadék',
    stroke: '#cc00ff',
    stroke2: '#0099cc',
  },
  {
    dataKey: 'leafMoisture',
    name: 'Levél nedvesség',
    stroke: '#ff9900',
    stroke2: '#0099cc',
  },
  {
    dataKey: 'lightUnit',
    name: 'Fény egység',
    stroke: '#000000',
    stroke2: '#0099cc',
  },
  {
    dataKey: 'precipitationCounter',
    name: 'Csapadék számláló',
    stroke: '#000000',
    stroke2: '#0099cc',
  },
];

const MiscChart = ({ linedata, linedata2 }) => {
  return (
    <GeneralChart
      axisLabel={axisLabel}
      labels={labels}
      isLineChart={true}
      linedata={linedata}
      linedata2={linedata2}
    />
  );
};

export default MiscChart;
