import styled from 'styled-components';

const Style = styled.div`
  background-color: #c54b3c;
  text-align: center;
  padding: 20px;
  position: fixed + '!important';
  left: 0;
  bottom: 0;
  height: 60px;
  width: 100%;
`;

function Footer({ children }) {
  return (
    <div>
      <Style>{children}</Style>
    </div>
  );
}

export default Footer;
