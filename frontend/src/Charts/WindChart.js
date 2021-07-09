import React from 'react';
import GeneralChart from './GeneralChart.js';

const axisLabel = [
  { dataKey: 'windSpeed', value: 'Szélsebesség km/h', stroke: '#c54b3c' },
  { dataKey: 'windDirection', value: 'Szélirány', stroke: '#009900' },
  { dataKey: 'windGust', value: 'Széllökés km/h', stroke: '#000000' },
];

const labels = [
  {
    dataKey: 'windSpeed',
    name: 'Szél sebesség',
    stroke: '#c54b3c',
    fill: '#c54b3c',
    stroke2: '#0099cc',
  },
  {
    dataKey: 'windDirection',
    name: 'Szél irány',
    stroke: '#009900',
    fill: '#009900',
    stroke2: '#0099cc',
  },
  {
    dataKey: 'windGust',
    name: 'Szél lökés',
    stroke: '#000000',
    fill: '#000000',
    stroke2: '#0099cc',
  },
];

const WindChart = (props) => {
  return (
    <GeneralChart
      axisLabel={axisLabel}
      labels={labels}
      isLineChart={false}
      {...props}
    />
  );
};

export default WindChart;
