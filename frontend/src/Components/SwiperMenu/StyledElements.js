import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardFooterText = styled.h5`
  background-color: black;
  color: white;
  text-align: center;
  padding: 30px;
`;

export const TitleText = styled.h1`
  color: #fff;
  text-align: center;
  padding: 30px;
`;

export const RearTitleText = styled.h1`
  color: black;
  text-align: center;
  padding: 30px;
`;

export const NavLinks = styled(Link)`
  color: #fff !important;
  text-decoration: none;
  cursor: pointer;
`;
