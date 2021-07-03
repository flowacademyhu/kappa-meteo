import { IconContext } from 'react-icons';
import {
  RearFooterText,
  FooterText,
  RearTitleText,
  FlipCardBody,
  FlipCardInner,
  CardFooter,
  FlipCardFront,
  FlipCardBack
} from './StyledElements';

export default function CardElement({ text, Icon, descript }) {
  return (
    <>
      <FlipCardBody className="flip-card">
        <FlipCardInner className="flip-card-inner">
          <FlipCardFront className="flip-card-front">
            {Icon && (
              <IconContext.Provider value={{ color: '#c54b3c' }}>
                {<Icon size={200} />}
              </IconContext.Provider>
            )}
            <CardFooter className="card-footer">
              <FooterText>{text}</FooterText>
            </CardFooter>
          </FlipCardFront>
          <FlipCardBack className="flip-card-back">
            <RearTitleText>Információ:</RearTitleText>
            <RearFooterText className="card-footer">{descript}</RearFooterText>
          </FlipCardBack>
        </FlipCardInner>
      </FlipCardBody>
    </>
  );
}