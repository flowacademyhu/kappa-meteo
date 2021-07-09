import React from 'react';
import GeneralChart from './GeneralChart.js';

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
    stroke2: '#0099cc',
  },
  {
    dataKey: 'externalBatteryVoltage',
    name: 'Külső akku feszültség',
    stroke: '#009900',
    fill: '#009900',
    stroke2: '#0099cc',
  },
  {
    dataKey: 'internalBatteryVoltage',
    name: 'Belső akku feszültség',
    stroke: '#000000',
    fill: '#000000',
    stroke2: '#0099cc',
  },
];

const BatteryChart = ({ linedata, linedata2 }) => {
  return (
    <GeneralChart
      axisLabel={axisLabel}
      labels={labels}
      isLineChart={false}
      linedata={linedata}
      linedata2={linedata2}
    />
  );
};

export default BatteryChart;
