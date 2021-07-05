import React from 'react';
import styled from 'styled-components';
import NewUploadButton from './NewUploadButton';

const StyledH1 = styled.h1`
  color: red;
`;

const Failed = ({ failed, setFailed }) => {
  return (
    <>
      <StyledH1>Sikertelen fájl feltöltés!!!</StyledH1>
      <NewUploadButton result={failed} setResult={setFailed} />
    </>
  );
};

export default Failed;
