import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';

const data = [
  { argument: 1, value: 10 },
  { argument: 2, value: 20 },
  { argument: 3, value: 30 },
  { argument: 4, value: 40 },
  { argument: 5, value: 50 },
];

export default () => (
  <div className="container">
  <div className="row row-cols-1 row-cols-md-1 g-5 m-2">
    <Paper>
      <Chart data={data}>
        <ArgumentAxis />
        <ValueAxis />

        <LineSeries color="#c54b3c" valueField="value" argumentField="argument" />
      </Chart>
    </Paper>
  </div>
  </div>
);
