import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const InfoStyle = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  margin-top: 250px;
  &:hover {
    box-shadow: 0px 0px 30px 10px #c54b3c;
  }
`;
export const NavLink = styled(Link)`
  color: #fff !important;
  text-decoration: none;
  cursor: pointer;
`;

//CARDS

export const CardStyle = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  &:hover {
    box-shadow: 0px 0px 30px 10px #c54b3c;
  }
`;

export const CardTitleText = styled.h5`
  color: #fff;
  text-align: center;
`;
export const CardData = styled.h3`
  color: #fff;
  text-align: center;
`;
export const CardFooterText = styled.p`
  color: #fff;
  text-align: center;
`;
export const StyleZoom = styled.div`
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

//DASHBOARD IMAGE

export const TitleText = styled.h1`
  color: #fff;
  text-align: center;
  margin: 50px;
  text-shadow: 2px 2px black;
`;
export const GroupText = styled.h4`
  color: #fff;
  margin: 10px;
  text-shadow: 2px 2px black;
`;
export const CardBorder = styled.div`
  border: 1px solid #c54b3c;
  margin: 10px;
  border-radius: 10px;
  background-color: rgba(116, 116, 116, 0.5);
`;
export const MiscGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
export const WindGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;
export const SoilGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;
export const BatteryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;
