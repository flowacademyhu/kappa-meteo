import React, { useEffect, useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import axios from 'axios';

const BatteryChart = ({ dateState, dateFormat }) => {
  const [linedata, setLineData] = useState([]);
  const [dataType, setDataType] = useState('DAILY');
  const [station, setStation] = useState(12);
  const start = '2021.04.09. 13:45';
  const end = '2021.04.13. 19:17';
  const [isSolarCellChargingVoltage, setSolarCellChargingVoltage] =
    useState(true);
  const [isExternalBatteryVoltage, setExternalBatteryVoltage] = useState(false);
  const [isInternalBatteryVoltage, setInternalBatteryVoltage] = useState(false);

  useEffect(async () => {
    try {
      const response = await axios.get(
        `/api/battery?start=${dateFormat(
          dateState[0].startDate
        )}&end=${dateFormat(
          dateState[0].endDate
        )}&type=${dataType}&id=${station}`
      );
      const result = response.data;
      const mappedResult = result.map((item, index) => {
        return { ...item, number: index };
      });
      setLineData(mappedResult);
    } catch (err) {
      console.error('Error during api call:', err);
    }
  }, [dataType, station]);

  return (
    linedata !== null &&
    linedata !== undefined && (
      <>
        <form>
          <input
            type="checkbox"
            name="solarCellChargingVoltage"
            value="solarCellChargingVoltage"
            onChange={() =>
              setSolarCellChargingVoltage(!isSolarCellChargingVoltage)
            }
            checked={isSolarCellChargingVoltage}
          />
          <label htmlFor="AirTemperature"> solarCellChargingVoltage </label>
          <input
            type="checkbox"
            name="externalBatteryVoltage"
            value="externalBatteryVoltage"
            onChange={() =>
              setExternalBatteryVoltage(!isExternalBatteryVoltage)
            }
            checked={isExternalBatteryVoltage}
          />
          <label htmlFor="AirPressure">externalBatteryVoltage</label>
          <input
            type="checkbox"
            name="internalBatteryVoltage"
            value="internalBatteryVoltage"
            onChange={() =>
              setInternalBatteryVoltage(!isInternalBatteryVoltage)
            }
            checked={isInternalBatteryVoltage}
          />
          <label htmlFor="AirHumidity"> internalBatteryVoltage</label>
        </form>

        <div className="container p-3 m-3">
          <label htmlFor="stationId">Choose a Station:</label>
          <select
            name="stations"
            id="stations"
            onChange={(e) => setStation(e.target.value)}
          >
            <option value="12">Szeged</option>
          </select>
        </div>
        <div className="container p-3 m-3">
          <label htmlFor="dateTime">Choose a date:</label>
          <select
            name="dateTime"
            id="datetime"
            onChange={(e) => setDataType(e.target.value)}
          >
            <option value="DAILY">Daily</option>
            <option value="HOURLY">Hourly</option>
            <option value="TEN_MIN">10 min</option>
          </select>
        </div>

        <AreaChart
          width={1000}
          height={500}
          data={linedata}
          margin={{
            top: 25,
            right: 60,
            left: 40,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <Tooltip />
          <Legend />
          {isSolarCellChargingVoltage && (
            <Area
              type="monotone"
              dataKey="solarCellChargingVoltage"
              name="solarCellChargingVoltage"
              stroke="#000000"
              yAxisId={0}
              dot={false}
              fill="#8884d8"
            ></Area>
          )}
          {isExternalBatteryVoltage && (
            <Area
              type="monotone"
              dataKey="externalBatteryVoltage"
              name="externalBatteryVoltage"
              stroke="#000000"
              yAxisId={1}
              dot={false}
              fill="#8884d8"
            ></Area>
          )}

          {isInternalBatteryVoltage && (
            <Area
              type="monotone"
              dataKey="internalBatteryVoltage"
              name="internalBatteryVoltage"
              stroke="#000000"
              yAxisId={2}
              dot={false}
              fill="#8884d8"
            ></Area>
          )}
        </AreaChart>
      </>
    )
  );
};

export default BatteryChart;
