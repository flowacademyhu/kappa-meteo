import styled from 'styled-components';
import RotateLoader from 'react-spinners/RotateLoader';

const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
`;

const Loading = () => (
  <>
    <StyledSpinner>
      <RotateLoader margin={30} size={40} color={'#fff'}></RotateLoader>
    </StyledSpinner>
  </>
);

export default Loading;
