import styled from 'styled-components';

export const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
`;
export const HeroBg = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const MenuWrapper = styled.div`
  text-align: center;
  bottom: 0;
  background: rgba(0, 0, 0, 0);
  color: #ffffff;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
`;

export const MyVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
`;
