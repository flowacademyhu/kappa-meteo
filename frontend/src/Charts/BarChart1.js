import React, { PureComponent, useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import axios from 'axios';
import DropdownMultiselect from 'react-multiselect-dropdown-bootstrap';

/*const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    dv: 500,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    dv: 500,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    dv: 500,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    dv: 500,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    dv: 500,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    dv: 500,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    dv: 500,
    amt: 2100,
  },
];
*/
const optionsArray = [{ key: 1, label: 'Levegő hőmérséklet' }];
const optionsArray2 = [
  { key: 1, label: 'Talaj nedvesség 30 cm' },
  { key: 2, label: 'Talaj nedvesség 60 cm' },
  { key: 3, label: 'Talaj nedvesség 90 cm' },
  { key: 4, label: 'Talaj nedvesség 120 cm' },
];
const optionsArray3 = [{ key: 1, label: 'Szél lökés' }];
const optionsArray4 = [{ key: 1, label: 'Légnyomás' }];
const optionsArray5 = [{ key: 1, label: 'Levegő nedvesség' }];
const optionsArray6 = [{ key: 1, label: 'Külső akkufeszültség' }];
const optionsArray7 = [{ key: 1, label: 'Csapadék' }];
const optionsArray8 = [{ key: 1, label: 'Szél irány' }];
const optionsArray9 = [{ key: 1, label: 'Belső akkufeszültség' }];
const optionsArray10 = [{ key: 1, label: 'Fagy' }];
const optionsArray11 = [{ key: 1, label: 'Szél sebesség' }];
const optionsArray12 = [{ key: 1, label: 'Levegő páratartalom' }];
const optionsArray13 = [{ key: 1, label: 'Fény egység' }];
const optionsArray14 = [{ key: 1, label: 'Besugárzás' }];
const optionsArray15 = [{ key: 1, label: 'Napelem töltő feszültség' }];
const optionsArray16 = [{ key: 1, label: 'Talaj hőmérséklet 0 cm' }];
const optionsArray17 = [{ key: 1, label: 'Csapadék számláló' }];

export default function BarChart1() {
  const [data, setData] = useState([]);

  /*const handleOnChange = () => {
    BarChart.data = data
  }
*/
  /*const data2 = 
{
 date: "2021-04-20 19:50:00",
 type: "TEN_MIN",
 airData: {
 airHumidity: 83.94,
 airPressure: 1005.9,
 airTemperature: 8.5
 },
 miscData: {
 irradiation: 0.0,
 freeze: 0.0,
 rain: 0.0,
 leafMoisture: 0.0,
 lightUnit: 3895.0,
 precipitationCounter: null
 },
 soilData: {
 soilMoisture30cm: 16.365498,
 soilMoisture60cm: 14.699497,
 soilMoisture90cm: 12.259997,
 soilMoisture120cm: 0.0,
 soilTemperature0cm: 8.9
 },
 batteryData: {
 solarCellChargingVoltage: 0.0,
 externalBatteryVoltage: 12.877,
 internalBatteryVoltage: 4.206
 },
 windData: {
 windSpeed: 0.0,
 windDirection: 11.964702,
 windGust: 0.5
 }
}
*/
useEffect(() => {
  axios
 .get('http://localhost:8080/api/test/12', {
 mode: 'no-cors',
 })
 .then((response) => {
 setData(response.data);
 })
 .catch((error) => console.log(error));
 }, []);

 console.log(data);


        // useEffect(async () => {
        //   try {
        //     const result = await axios.get(
        //       `/api/test/12`
        //     );
        //     setData(result.data);
        //   } catch (e) {
        //     alert("Hibaüzenet");
        //   }
        // }, []);

  return (
    <>
    {data.airPressure !== null && data.airPressure !== undefined && (
      <div className="container">
        <div className="row">
          <div className="col-2 p-2">
            <DropdownMultiselect
              options={optionsArray}
              name="countries"
              buttonClass="btn btn-primary"
              placeholder="Levegő hőmérséklet"
            />
          </div>
          <div className="col-2 p-2">
            <DropdownMultiselect
              options={optionsArray2}
              name="countries"
              buttonClass="btn btn-primary"
              placeholder="Talaj nedvesség"
            />
          </div>
          <div className="col-2 p-2">
            <DropdownMultiselect
              options={optionsArray3}
              name="countries"
              buttonClass="btn btn-primary"
              placeholder="Szél lökés"
            />
          </div>
          <div className="col-2 p-2">
            <DropdownMultiselect
              options={optionsArray4}
              name="countries"
              buttonClass="btn btn-primary"
              placeholder="Légnyomás"
            />
          </div>
          <div className="col-2 p-2">
            <DropdownMultiselect
              options={optionsArray5}
              name="countries"
              buttonClass="btn btn-primary"
              placeholder="Levegő nedvesség"
            />
          </div>
          <div className="col-2 p-2">
            <DropdownMultiselect
              options={optionsArray6}
              name="countries"
              buttonClass="btn btn-primary"
              placeholder="Külső akkufeszültség"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-2 p-2">
            <DropdownMultiselect
              options={optionsArray7}
              name="countries"
              buttonClass="btn btn-primary"
              placeholder="Csapadék"
            />
          </div>
          <div className="col-2 p-2">
            <DropdownMultiselect
              options={optionsArray8}
              name="countries"
              buttonClass="btn btn-primary"
              placeholder="Szél irány"
            />
          </div>
          <div className="col-2 p-2">
            <DropdownMultiselect
              options={optionsArray9}
              name="countries"
              buttonClass="btn btn-primary"
              placeholder="Belső akkufeszültség"
            />
          </div>
          <div className="col-2 p-2">
            <DropdownMultiselect
              options={optionsArray10}
              name="countries"
              buttonClass="btn btn-primary"
              placeholder="Fagy"
            />
          </div>
          <div className="col-2 p-2">
            <DropdownMultiselect
              options={optionsArray11}
              name="countries"
              buttonClass="btn btn-primary"
              placeholder="Szél sebesség"
            />
          </div>
          <div className="col-2 p-2">
            <DropdownMultiselect
              options={optionsArray12}
              name="countries"
              buttonClass="btn btn-primary"
              placeholder="Levegő páratartalom"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-2 p-2">
            <DropdownMultiselect
              options={optionsArray13}
              name="countries"
              buttonClass="btn btn-primary"
              placeholder="Fény egység"
            />
          </div>
          <div className="col-2 p-2">
            <DropdownMultiselect
              options={optionsArray14}
              name="countries"
              buttonClass="btn btn-primary"
              placeholder="Besugárzás"
            />
          </div>
          <div className="col-2 p-2">
            <DropdownMultiselect
              options={optionsArray15}
              name="countries"
              buttonClass="btn btn-primary"
              placeholder="Napelem töltő feszültség"
            />
          </div>
          <div className="col-2 p-2">
            <DropdownMultiselect
              options={optionsArray16}
              name="countries"
              buttonClass="btn btn-primary"
              placeholder="Talaj hőmérséklet 0 cm"
            />
          </div>
          <div className="col-2 p-2">
            <DropdownMultiselect
              options={optionsArray17}
              name="countries"
              buttonClass="btn btn-primary"
              placeholder="Csapadék számláló"
              //handleOnChange={}
            />
          </div>
        </div>
  
        <div className="container align-items-center justify-content-center p-3">
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <BarChart
                width={1000}
                height={500}
                data={data}
                margin={{
                  top: 25,
                  right: 60,
                  left: 40,
                  bottom: 20,
                }}
              >
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey={data} />
                <YAxis/>
                <Tooltip />
                <Legend />
                {/* <Bar dataKey={data.airData.airPressure}fill="#8884d8"/>
                <Bar dataKey={data.airData.airHumidity} fill="#82ca9d"/>
                <Bar dataKey={data.airData.airTemperature} fill="#12bc5a"/> */}
              </BarChart>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
     )}
    </>
    
  );
}
