import React from 'react';
import styled from 'styled-components';
import NewUploadButton from './NewUploadButton';

const StyledH1 = styled.h1`
  color: red;
`;

const Failed = () => <StyledH1>Sikertelen fájl feltöltés!!!</StyledH1>;

export default Failed;
