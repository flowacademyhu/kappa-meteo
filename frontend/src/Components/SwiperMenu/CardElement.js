import { IconContext } from 'react-icons';
import { CardFooterText, TitleText } from './StyledElements';

export default function CardElement({ text, Icon, descript }) {
  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            {Icon && (
              <IconContext.Provider value={{ color: '#c54b3c' }}>
                {<Icon size={200} />}
              </IconContext.Provider>
            )}
            <div className="card-footer">
              <TitleText>{text}</TitleText>
            </div>
          </div>
          <div className="flip-card-back">
            <TitleText>Információ:</TitleText>
            <CardFooterText className="title">{descript}</CardFooterText>
          </div>
        </div>
      </div>
    </>
  );
}
