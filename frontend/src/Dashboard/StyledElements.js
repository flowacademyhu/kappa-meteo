import styled from "styled-components";

export const TitleText = styled.h1`
  color: #fff;
  text-align: center;
  padding-bottom: 50px;
`;
export const GroupText = styled.h4`
  color: #fff;
  padding-bottom: 50px;
`;
export const CardBorder = styled.div`
  border: 1px solid #c54b3c;
  margin: 15px;
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