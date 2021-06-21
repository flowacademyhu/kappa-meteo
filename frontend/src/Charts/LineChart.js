import React, {useState, useEffect} from 'react';
import { Line } from 'react-chartjs-2';

export default function LineChart() {
    const [chartLabel, setChartLabel] = useState('');
    const [dataLabels, setDataLabels] = useState({});
    const [chartData, setChartData] = useState({});



    return (
        <>
        
        <div className="container align-items-center justify-content-center">
            <div className="row align-items-center justify-content-center">
                <div className="col-2 p-2">
                <div className="dropdown">
  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Levegő hőmérséklet
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Valami1</a></li>
  </ul>
</div>
            </div>
            <div className="col-2 p-2">
                <div className="dropdown">
  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Talaj nedvesség
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Talaj nedvesség 30cm</a></li>
    <li><a className="dropdown-item" href="#">Talaj nedvesség 60cm</a></li>
    <li><a className="dropdown-item" href="#">Talaj nedvesség 90cm</a></li>
    <li><a className="dropdown-item" href="#">Talaj nedvesség 120cm</a></li>
  </ul>
</div>
            </div>
            <div className="col-2 p-2">
                <div className="dropdown">
  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Szél lökés
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Szél lökés</a></li>
  </ul>
</div>
            </div>
            <div className="col-2 p-2">
                <div className="dropdown">
  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Légnyomás
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Légnyomás</a></li>
  </ul>
</div>
            </div>
            <div className="col-2 p-2">
                <div className="dropdown">
  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Levegő nedvesség
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Levegő nedvesség</a></li>
  </ul>
</div>
            </div>
            <div className="col-2 p-2">
                <div className="dropdown">
  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Külső akkufeszültség
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Külső akkufeszültség</a></li>
  </ul>
</div>
            </div>

            </div>
            <div className="row">
            <div className="col-2 p-2">
                <div className="dropdown">
  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Csapadék
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Csapadék</a></li>
  </ul>
</div>
            </div>
            <div className="col-2 p-2">
                <div className="dropdown">
  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Szél irány
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Szél irány</a></li>
  </ul>
</div>
            </div>
            <div className="col-2 p-2">
                <div className="dropdown">
  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Belső akkufeszültség
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Belső akkufeszültség</a></li>
  </ul>
</div>
            </div>
            <div className="col-2 p-2">
                <div className="dropdown">
  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Fagy
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Fagy</a></li>
  </ul>
</div>
            </div>
            <div className="col-2 p-2">
                <div className="dropdown">
  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Szél sebesség
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Szél sebesség</a></li>
  </ul>
</div>
            </div>
            <div className="col-2 p-2">
                <div className="dropdown">
  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Levegő páratartalom
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Levegő páratartalom</a></li>
  </ul>
</div>
            </div>
            </div>
            <div className="row">
            <div className="col-2 p-2">
                <div className="dropdown">
  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Fény egység
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Fény egység</a></li>
  </ul>
</div>
            </div>
            <div className="col-2 p-2">
                <div className="dropdown">
  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Besugárzás
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Besugárzás</a></li>
  </ul>
</div>
            </div>
            <div className="col-2 p-2">
                <div className="dropdown">
  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Napelem töltő feszültség
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Napelem töltő feszültség</a></li>
  </ul>
</div>
            </div>
            <div className="col-3 p-2">
                <div className="dropdown">
  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Talaj hőmérséklet 0 cm
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Talaj hőmérséklet 0 cm</a></li>
  </ul>
</div>
            </div>
            <div className="col-3 p-2">
                <div className="dropdown">
  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Csapadék számláló
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Csapadék számláló</a></li>
  </ul>
</div>
            </div>
            </div>
            
            </div>
                
    <Line
    data= {{
        labels: ['Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat', 'Vasárnap'],
        datasets: [
            {
                label: 'Heti hőmésréklet',
                data: [],
                backgroundColor: 'white',
                borderColor: 'green',
                borderWidth: 2
            },
        ]
    }}
    height={400}
    width={600}
    options={{
        maintainAspectRatio: false,
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    }
                }
            ]
        }
    }}
/>
</>
    );
}
