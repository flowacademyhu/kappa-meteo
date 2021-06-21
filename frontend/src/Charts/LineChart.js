import React from 'react';
import { Line } from 'react-chartjs-2';

export default function LineChart() {


    return (
        <div>
    <Line
    data= {{
        labels: ['Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat', 'Vasárnap'],
        datasets: [
            {
                label: 'Heti hőmésréklet',
                data: [20, 21, 25, 24, 12, 5, 30],
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
