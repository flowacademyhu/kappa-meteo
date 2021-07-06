import React from 'react';
import styled from 'styled-components';
import NewUploadButton from './NewUploadButton';

const StyledH1 = styled.h1`
  color: green;
  margin-top: 100px;
`;

const Success = ({ success, setSuccess }) => {
  return (
    <>
      <StyledH1>Sikeres fájl feltöltés!</StyledH1>
      <NewUploadButton className="d-flex" result={success} setResult={setSuccess} />
    </>
  );
};

export default Success;
