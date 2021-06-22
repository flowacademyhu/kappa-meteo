import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from "axios";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

const data = [
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

  const optionsArray = [
    { key: 1, label: "Levegő hőmérséklet" }
    
  ];

  const optionsArray2 = [
    { key: 1, label: "Talaj nedvesség 30 cm" },
    { key: 2, label: "Talaj nedvesség 60 cm" },
    { key: 3, label: "Talaj nedvesség 90 cm" },
    { key: 4, label: "Talaj nedvesség 120 cm" }
  ];

  const optionsArray3 = [
    { key: 1, label: "Szél lökés" }
    
  ];

  const optionsArray4 = [
    { key: 1, label: "Légnyomás" }
    
  ];
  const optionsArray5 = [
    { key: 1, label: "Levegő nedvesség" }
    
  ];
  const optionsArray6 = [
    { key: 1, label: "Külső akkufeszültség" }
    
  ];
  const optionsArray7 = [
    { key: 1, label: "Csapadék" }
    
  ];

  const optionsArray8 = [
    { key: 1, label: "Szél irány" }
    
  ];

  const optionsArray9 = [
    { key: 1, label: "Belső akkufeszültség" }
    
  ];

  const optionsArray10 = [
    { key: 1, label: "Fagy" }
    
  ];
  const optionsArray11 = [
    { key: 1, label: "Szél sebesség" }
    
  ];
  const optionsArray12 = [
    { key: 1, label: "Levegő páratartalom" }
    
  ];
  const optionsArray13 = [
    { key: 1, label: "Fény egység" }
    
  ];

  const optionsArray14 = [
    { key: 1, label: "Besugárzás" }
    
  ];
  const optionsArray15 = [
    { key: 1, label: "Napelem töltő feszültség" }
    
  ];
  const optionsArray16 = [
    { key: 1, label: "Talaj hőmérséklet 0 cm" }
    
  ];
  const optionsArray17 = [
    { key: 1, label: "Csapadék számláló" }
    
  ];
  





export default function BarChart1() {

    //const [data, setData] = useState([]);

    /*useEffect(async () => {
        try {
          const response = await axios.get(
            `https://localhost:8081/api/test/data`
          );
          setData(response.data);
        } catch (err) {
          console.error('Error during api call:', err);
        }
      }, []);
*/

    return (
<>
<div className="container">
            <div className="row">
                <div className="col-2 p-2">
                <DropdownMultiselect options={optionsArray} name="countries" buttonClass="btn btn-primary" placeholder="Levegő hőmérséklet"/>
                </div>
                <div className="col-2 p-2">
                <DropdownMultiselect options={optionsArray2} name="countries" buttonClass="btn btn-primary" placeholder="Talaj nedvesség" />
                </div>
                <div className="col-2 p-2">
                <DropdownMultiselect options={optionsArray3} name="countries" buttonClass="btn btn-primary" placeholder="Szél lökés" />
                </div>
                <div className="col-2 p-2">
                <DropdownMultiselect options={optionsArray4} name="countries" buttonClass="btn btn-primary" placeholder="Légnyomás" />
                </div>
                <div className="col-2 p-2">
                <DropdownMultiselect options={optionsArray5} name="countries" buttonClass="btn btn-primary" placeholder="Levegő nedvesség" />
                </div>
                <div className="col-2 p-2">
                <DropdownMultiselect options={optionsArray6} name="countries" buttonClass="btn btn-primary" placeholder="Külső akkufeszültség" />
                </div>
                </div>
<div className="row">
<div className="col-2 p-2">
                <DropdownMultiselect options={optionsArray7} name="countries" buttonClass="btn btn-primary" placeholder="Csapadék"/>
                </div>
                <div className="col-2 p-2">
                <DropdownMultiselect options={optionsArray8} name="countries" buttonClass="btn btn-primary" placeholder="Szél irány" />
                </div>
                <div className="col-2 p-2">
                <DropdownMultiselect options={optionsArray9} name="countries" buttonClass="btn btn-primary" placeholder="Belső akkufeszültség" />
                </div>
                <div className="col-2 p-2">
                <DropdownMultiselect options={optionsArray10} name="countries" buttonClass="btn btn-primary" placeholder="Fagy" />
                </div>
                <div className="col-2 p-2">
                <DropdownMultiselect options={optionsArray11} name="countries" buttonClass="btn btn-primary" placeholder="Szél sebesség" />
                </div>
                <div className="col-2 p-2">
                <DropdownMultiselect options={optionsArray12} name="countries" buttonClass="btn btn-primary" placeholder="Levegő páratartalom" />
</div>
            </div>
            <div className="row">
<div className="col-2 p-2">
                <DropdownMultiselect options={optionsArray13} name="countries" buttonClass="btn btn-primary" placeholder="Fény egység"/>
                </div>
                <div className="col-2 p-2">
                <DropdownMultiselect options={optionsArray14} name="countries" buttonClass="btn btn-primary" placeholder="Besugárzás" />
                </div>
                <div className="col-2 p-2">
                <DropdownMultiselect options={optionsArray15} name="countries" buttonClass="btn btn-primary" placeholder="Napelem töltő feszültség" />
                </div>
                <div className="col-2 p-2">
                <DropdownMultiselect options={optionsArray16} name="countries" buttonClass="btn btn-primary" placeholder="Talaj hőmérséklet 0 cm" />
                </div>
                <div className="col-2 p-2">
                <DropdownMultiselect options={optionsArray17} name="countries" buttonClass="btn btn-primary" placeholder="Csapadék számláló" />
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
        bottom: 20
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar
        dataKey="pv"
        fill="#8884d8"
      />
      <Bar dataKey="uv" fill="#82ca9d" />
      <Bar dataKey="dv" fill="#12bc5a" />
    </BarChart>
    </div>
    <div className="col"></div>
    </div>
    </div>
</div>
</>
  )
}