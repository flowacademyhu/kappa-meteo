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
const optionsArray = [
  { key: 1, label: 'Australia' },
  { key: 'ca', label: 'Canada' },
  { key: 'us', label: 'USA' },
  { key: 'pl', label: 'Poland' },
  { key: 'es', label: 'Spain' },
  { key: 'fr', label: 'France' },
];

export default function LineChart2() {
  const [linedata, setLineData] = useState([]);

  useEffect(async () => {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/test/12`
          );
          setLineData(response.data);
          console.log(response)
        } catch (err) {
          console.error('Error during api call:', err);
        }
      }, []);


  return (
    <>
      <div className="container align-items-center justify-content-center">
        <div className="row align-items-center justify-content-center">
          <div className="col-2 p-2">
            <div className="dropdown">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Levegő hőmérséklet
              </button>
              <ul className="dropdown-menu checkbox-menu allow-focus">
                <li>
                  <label>
                    <input type="checkbox"></input>
                    <a> Levegő hőmérséklet</a>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2 p-2">
            <div className="dropdown">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Talaj nedvesség
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Talaj nedvesség 30cm
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Talaj nedvesség 60cm
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Talaj nedvesség 90cm
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Talaj nedvesség 120cm
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2 p-2">
            <div className="dropdown">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Szél lökés
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Szél lökés
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2 p-2">
            <div className="dropdown">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Légnyomás
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Légnyomás
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2 p-2">
            <div className="dropdown">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Levegő nedvesség
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Levegő nedvesség
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2 p-2">
            <div className="dropdown">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Külső akkufeszültség
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Külső akkufeszültség
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-2 p-2">
            <div className="dropdown">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Csapadék
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Csapadék
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2 p-2">
            <div className="dropdown">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Szél irány
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Szél irány
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2 p-2">
            <div className="dropdown">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Belső akkufeszültség
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Belső akkufeszültség
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2 p-2">
            <div className="dropdown">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Fagy
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Fagy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2 p-2">
            <div className="dropdown">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Szél sebesség
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Szél sebesség
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2 p-2">
            <div className="dropdown">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Levegő páratartalom
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Levegő páratartalom
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-2 p-2">
            <div className="dropdown">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Fény egység
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Fény egység
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2 p-2">
            <div className="dropdown">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Besugárzás
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Besugárzás
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2 p-2">
            <div className="dropdown">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Napelem töltő feszültség
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Napelem töltő feszültség
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3 p-2">
            <div className="dropdown">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Talaj hőmérséklet 0 cm
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Talaj hőmérséklet 0 cm
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3 p-2">
            <div className="dropdown">
              <button
                className="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Csapadék számláló
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Csapadék számláló
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <DropdownMultiselect
              options={optionsArray}
              name="countries"
              buttonClass="btn btn-primary"
              placeholder="Semmi"
            />
          </div>
          <div className="col-2">
            <DropdownMultiselect
              options={optionsArray}
              name="countries"
              buttonClass="btn btn-primary"
              placeholder="B"
            />
          </div>
          <div className="col-2">
            <DropdownMultiselect
              options={optionsArray}
              name="countries"
              buttonClass="btn btn-primary"
              placeholder="C"
            />
          </div>
          <div className="col-2">
            <DropdownMultiselect
              options={optionsArray}
              name="countries"
              buttonClass="btn btn-primary"
              placeholder="D"
            />
          </div>
          <div className="col-2">
            <DropdownMultiselect
              options={optionsArray}
              name="countries"
              buttonClass="btn btn-primary"
              placeholder="E"
            />
          </div>
          <div className="col-2">
            <DropdownMultiselect
              options={optionsArray}
              name="countries"
              buttonClass="btn btn-primary"
              placeholder="F"
            />
          </div>
        </div>
      </div>
      {linedata.airPressure !== null && linedata.airPressure !== undefined && (
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
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey={linedata.airData.airTemperature}
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey={linedata.airData.airPressure} stroke="#82ca9d" />
              <Line type="monotone" dataKey={linedata.airData.airHumidity} stroke="#82ca9d" />
            </LineChart>
          </div>
          <div className="col"></div>
        </div>
      </div>
    )}
    </>
  );
}
