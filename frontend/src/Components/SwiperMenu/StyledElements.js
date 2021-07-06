import styled from 'styled-components';
import { Link } from 'react-router-dom';

//SWIPER

export const SwiperContainer = styled.div`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 220px;
  overflow: visible !important;
`;

//FLIPCARDS

export const FlipCardBody = styled.div`
  padding-top: 15px;
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;

  &:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
`;

export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  border-radius: 20px;
`;

export const FlipCardFront = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  box-shadow: 0px 0px 10px 5px #fff;
`;

export const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #c54b3c;
  border-radius: 20px;
  transform: rotateY(180deg);
  box-shadow: 0px 0px 10px 5px #fff;
`;

export const CardFooter = styled.div`
  margin-top: 15px;
`;

export const FooterText = styled.h1`
  color: #fff;
  text-align: center;
`;

export const NavLinks = styled(Link)`
  color: #fff !important;
  text-decoration: none;
  cursor: pointer;
`;

export const RearFooterText = styled.h5`
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  color: white;
  text-align: center;
  padding: 30px;
`;

export const RearTitleText = styled.h1`
  color: black;
  text-align: center;
  padding: 20px;
`;
