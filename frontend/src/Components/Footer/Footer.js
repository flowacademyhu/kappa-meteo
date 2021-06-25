import styled from 'styled-components';

const Style = styled.div`
  text-color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
  text-align: center;
  padding: 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 100px;
  width: 100%;
`;

export const FooterText = styled.div`
  color: #fff;
  font-size: 35px;
`;
export const FooterDescript = styled.div`
  color: #fff;
  font-size: 20px;
`;

function Footer({ children }) {
  return (
    <div>
      <Style>
        <FooterText>MeteOApp</FooterText>
        <FooterDescript>
          Több mint 150 moduláris állomás adatai egy helyen...
        </FooterDescript>
      </Style>
    </div>
  );
}

export default Footer;
