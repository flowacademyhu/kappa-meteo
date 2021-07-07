import React from 'react';
import GeneralChart from './GeneralChart.js';
import { AreaChart } from 'recharts';

const axisLabel = [
  {
    dataKey: 'solarCellChargingVoltage',
    value: 'Napelem töltő feszültség V',
    stroke: '#c54b3c',
  },
  {
    dataKey: 'externalBatteryVoltage',
    value: 'Külső akku feszültség V',
    stroke: '#009900',
  },
  {
    dataKey: 'internalBatteryVoltage',
    value: 'Belső akku feszültség V',
    stroke: '#000000',
  },
];

const labels = [
  {
    dataKey: 'solarCellChargingVoltage',
    name: 'Napelem töltő feszültség',
    stroke: '#c54b3c',
    fill: '#c54b3c',
  },
  {
    dataKey: 'externalBatteryVoltage',
    name: 'Külső akku feszültség',
    stroke: '#009900',
    fill: '#009900',
  },
  {
    dataKey: 'internalBatteryVoltage',
    name: 'Belső akku feszültség',
    stroke: '#000000',
    fill: '#000000',
  },
];

const BatteryChart = ({ linedata }) => {
  return (
    <GeneralChart
      linedata={linedata}
      axisLabel={axisLabel}
      labels={labels}
      isLineChart={false}
    />
  );
};

export default BatteryChart;
