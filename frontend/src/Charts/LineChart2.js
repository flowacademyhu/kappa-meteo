import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import DropdownMultiselect from 'react-multiselect-dropdown-bootstrap';
import axios from 'axios';

export default function LineChart2() {
  const [linedata, setLineData] = useState([]);
  const [date, setDate] = useState("");
  const [station, setStation] = useState(12);
  //http://localhost:8080/test2?id=12&type=DAILY

  useEffect(async () => {
    try {
      const response = await axios.get(`http://localhost:8080/test2?id=`+station+`&type=`+date);
      const result = response.data
      const  mappedResult = result.map((item, index) =>{
        return {...item, number: index}
      })
      setLineData(mappedResult)
     
    } catch (err) {
      console.error('Error during api call:', err);
    }
  }, [date, station]);
  console.log(linedata);


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


  return (
    <>
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
          </div>
      <div className="container p-3 m-3">
      <label htmlFor="dateTime">Choose a date:</label>
<select name="dateTime" id="datetime" onChange={(e)=>setDate(e.target.value)}>
  <option value="DAILY">Daily</option>
  <option value="HOURLY">Hourly</option>
  <option value="TEN_MIN">10 min</option>

</select>
      </div>
      <div className="container p-3 m-3">
      <label htmlFor="stationId">Choose a Station:</label>
<select name="stations" id="stations" onChange={(e)=>setStation(e.target.value)}>
  <option value="12">Szeged</option>
  
</select>
      </div>
      {linedata !== null && linedata !== undefined && (
        <div className="container align-items-center justify-content-center p-3">
          <div className="row">
            <div className="col"></div>
            <div className="col">
              <LineChart
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
                <XAxis dataKey="number" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="airTemperature"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                  yAxisId={0}
                />
                <Line
                  type="monotone"
                  dataKey="airPressure"
                  stroke="#82ca9d"
                  yAxisId={1}
                />
                <Line
                  type="monotone"
                  dataKey="airHumidity"
                  stroke="#82ca9d"
                  yAxisId={2}
                />
              </LineChart>
            </div>
            <div className="col"></div>
          </div>
        </div>
      )}
    </>
  );
}
