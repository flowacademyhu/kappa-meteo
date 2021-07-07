import { IconContext } from 'react-icons';
import {
  CardStyle,
  CardTitleText,
  CardData,
  CardFooterText,
  StyleZoom,
} from './StyledElements';

const fixedTwoDigits = (text) => {
  if (typeof text != 'string') {
    return text?.toFixed(2);
  }
  return text;
};

export default function MeasureCard({
  titleText,
  text,
  footerText,
  unit,
  Icon,
}) {
  return (
    <StyleZoom>
      <CardStyle>
        <div className="card-body text-center">
          <IconContext.Provider value={{ color: '#c54b3c' }}>
            {<Icon size={100} />}
          </IconContext.Provider>
          <CardTitleText className="card-title">{titleText}</CardTitleText>
          <CardData className="card-text">
            {fixedTwoDigits(text)} {unit}
          </CardData>
        </div>
        <div className="card-footer">
          <CardFooterText>
            Utolsó mért adat:
            <br />
            {footerText}
          </CardFooterText>
        </div>
      </CardStyle>
    </StyleZoom>
  );
}
