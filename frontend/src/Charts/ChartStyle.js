import styled from 'styled-components';
import img from '../images/whiteBg.jpg';

export const GroupText = styled.h2`
  color: Black;
  padding: 15px;
`;
export const GroupBorder = styled.div`
  border: 1px solid #c54b3c;
  margin: 10px;
  border-radius: 10px;
  background-image: url(${img});
`;

export const IconContainer = styled.div`
  float: right !important;
`;

export const SideNav = styled.div`
  display: flex;
  top: 0;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
  pointer-events: none;
`;

export const StyledButton = styled.button`
  position: relative;
  margin: 16px 0px;
  left: -165px;
  transition: 0.3s;
  padding: 15px;
  width: 230px;
  font-size: 20px;
  color: rgb(255, 255, 255);
  border-radius: 15px;
  text-align: left !important;
  background-color: #c54b3c;
  pointer-events: auto;

  &:hover {
    left: 0;
    color: white;
    background-color: green;
  }
`;
