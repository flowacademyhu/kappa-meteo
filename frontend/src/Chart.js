import { Button, Card, Nav } from 'react-bootstrap';
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
  { argument: 6, value: 60 },
];

export default () => (
  <div className="container">
    <div className="row">
      <div className="row row-cols-1 row-cols-md-1 g-5 m-2">
        <Card className="text-center">
          <Card.Header>
            <Nav
              className="justify-content-center"
              variant="tabs"
              defaultActiveKey="#first"
            >
              <Nav.Item>
                <Nav.Link href="#first">10 perces adatok</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link">Órás adatok</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#disabled">Napi adatok</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>Grafikon</Card.Title>
          </Card.Body>
          <Paper>
            <Chart data={data}>
              <ArgumentAxis />
              <ValueAxis />
              <LineSeries
                color="#c54b3c"
                valueField="value"
                argumentField="argument"
              />
            </Chart>
          </Paper>
        </Card>
      </div>
    </div>
  </div>
);
