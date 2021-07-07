import styled from 'styled-components';

const StyledSpinner = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Loading = () => (
  <>
    <StyledSpinner>
      <div class="spinner-border text-light" role="status">
      </div>
      <div class="spinner-border text-danger" role="status">
      </div>
      <div class="spinner-border text-success" role="status">
      </div>
      <div class="spinner-border text-danger" role="status">
      </div>
      <div class="spinner-border text-light" role="status">
      </div>
    </StyledSpinner>
  </>
);

export default Loading;
