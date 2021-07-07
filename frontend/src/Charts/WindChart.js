import React from 'react';
import GeneralChart from './GeneralChart.js';
import { AreaChart } from 'recharts';

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
  },
  {
    dataKey: 'windDirection',
    name: 'Szél irány',
    stroke: '#009900',
    fill: '#009900',
  },
  {
    dataKey: 'windGust',
    name: 'Szél lökés',
    stroke: '#000000',
    fill: '#000000',
  },
];

const WindChart = ({ linedata }) => {
  return (
    <GeneralChart
      linedata={linedata}
      axisLabel={axisLabel}
      labels={labels}
      Chart={AreaChart}
      isLineChart={false}
    />
  );
};

export default WindChart;
