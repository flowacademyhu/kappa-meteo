import styled from 'styled-components';

const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  font-size: 30px;
`;

const Loading = () => (
  <>
    <StyledSpinner>
      <div class="spinner-border text-danger" role="status">
        <span class="visually-hidden"></span>
      </div>
      <div class="spinner-border text-success" role="status">
        <span class="visually-hidden"></span>
      </div>
      <div class="spinner-border text-danger" role="status">
        <span class="visually-hidden"></span>
      </div>
    </StyledSpinner>
  </>
);

export default Loading;
