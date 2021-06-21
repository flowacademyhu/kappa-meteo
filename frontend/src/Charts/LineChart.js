import React, {useState, useEffect} from 'react';
import { Line } from 'react-chartjs-2';

export default function LineChart() {
    const [chartlabel, setChartLabel] = useState('');
    const [datalabels, setDatalabels] = useState([]);
    const [data, setData] = useState({});
    


    const showTemp = e => {
        setData({
            labels: {datalabels},
            datasets: [
                {
                    label: {chartlabel},
                    data: {}
                }
            ]
        })
    }




    return (
        <div className="container">
            <div class="row">
            <div className="col-2">
                <button className="btn btn-success" type="button" onClick={showTemp}>
                Levegő Hőmérséklet
                </button>
           </div>
           <div className="col-2">
                <button className="btn btn-success" type="button" onClick={showTemp}>
                Levegő Hőmérséklet
                </button>
           </div>
           <div className="col-2">
                <button className="btn btn-success" type="button" onClick={showTemp}>
                Levegő Hőmérséklet
                </button>
           </div>
           <div className="col">
                <button className="btn btn-success" type="button" onClick={showTemp}>
                Levegő Hőmérséklet
                </button>
           </div>
           <div className="col">
                <button className="btn btn-success" type="button" onClick={showTemp}>
                Levegő Hőmérséklet
                </button>
           </div>
           <div className="col">
                <button className="btn btn-success" type="button" onClick={showTemp}>
                Levegő Hőmérséklet
                </button>
           </div>
           </div>
    <Line
    data= {{
        labels: ['Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat', 'Vasárnap'],
        datasets: [
            {
                label: 'valami',
                data: {},
                backgroundColor: '',
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
</div>
    );
}
