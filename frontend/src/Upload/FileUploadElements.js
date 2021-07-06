import styled from 'styled-components';

//HERO

export const HeroContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const MenuWrapper = styled.div`
  display: flex;
  top: 0;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MyVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
`;

//CARD

export const CardBody = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  top: 0;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  &:hover {
    box-shadow: 0px 0px 30px 10px #c54b3c;
  }
`;

export const CardFooter = styled.div`
  margin: auto;
`;

export const FooterText = styled.h3`
  color: #fff;
  margin: 40px;
`;

export const StyledH1 = styled.h1`
  color: #c54b3c;
`;

export const StyledInput = styled.input`
  display: none;
`;

export const StyledLabel = styled.label`
  font-size: 20px;
  border: 1px solid green;
  color: #fff;
  display: inline-block;
  padding: 6px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 15px 5px green;
    transition: transform 0.2s;
    transform: scale(1.1);
  }
`;
