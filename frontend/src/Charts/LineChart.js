import React from 'react';
import { Line } from 'react-chartjs-2';

export default function LineChart() {


    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
            <button className="btn btn-success" type="button">Levegő Hőmérséklet</button>
            </div>
            <div className="col-2">
            <button className="btn btn-success" type="button">Levegő Hőmérséklet</button>
            </div>
            <div className="col-2">
            <button className="btn btn-success" type="button">Levegő Hőmérséklet</button>
            </div>
            <div className="col-2">
            <button className="btn btn-success" type="button">Levegő Hőmérséklet</button>
            </div>
            <div className="col-2">
            <button className="btn btn-success" type="button">Levegő Hőmérséklet</button>
            </div>
            <div className="col-2">
            <button className="btn btn-success" type="button">Levegő Hőmérséklet</button>
            </div>
                </div>
    <Line
    data= {{
        labels: ['Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat', 'Vasárnap'],
        datasets: [
            {
                label: 'Heti hőmésréklet',
                data: [],
                backgroundColor: 'red',
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
