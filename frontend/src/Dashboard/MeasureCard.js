import { IconContext } from 'react-icons';
import {
  CardStyle,
  CardTitleText,
  CardData,
  CardFooterText,
  StyleZoom,
} from './StyledElements';

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
      </CardStyle>
    </StyleZoom>
  );
}
