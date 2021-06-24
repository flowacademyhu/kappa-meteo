import { IconContext } from 'react-icons';
import styled from 'styled-components';

const CardTitleText = styled.h5`
  color: #fff;
  text-align: center;
`;
const CardData = styled.h3`
  color: #fff;
  text-align: center;
`;
const CardFooterText = styled.p`
  color: #fff;
  text-align: center;
`;

export default function MeasureCard({
  titleText,
  text,
  footerText,
  unit,
  Icon,
}) {
  return (
    <div className="zoom">
      <div className="card">
        <IconContext.Provider value={{ color: '#c54b3c' }}>
          {<Icon size={100} />}
        </IconContext.Provider>
        <div className="card-body">
          <CardTitleText className="card-title">{titleText}</CardTitleText>
          <CardData className="card-text">
            {text} {unit}
          </CardData>
        </div>
        <div className="card-footer">
          <CardFooterText>
            Utolsó mért adat:
            <br />
            {footerText}
          </CardFooterText>
        </div>
      </div>
    </div>
  );
}