import styled from 'styled-components';

const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const Loading = () => (
  <>
    <StyledSpinner>
      <div className="spinner-grow text-primary" role="status">
        <span className="sr-only"></span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
        <span className="sr-only"></span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="sr-only"></span>
      </div>
      <div className="spinner-grow text-danger" role="status">
        <span className="sr-only"></span>
      </div>
      <div className="spinner-grow text-warning" role="status">
        <span className="sr-only"></span>
      </div>
      <div className="spinner-grow text-info" role="status">
        <span className="sr-only"></span>
      </div>
    </StyledSpinner>
  </>
);

export default Loading;
