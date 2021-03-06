import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  height: 80px;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease-in-out;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1100;
  width: 100%;
  padding: 0 24px;
  max-width: 1500px;
`;

export const NavLogo = styled(Link)`
  color: #fff !important;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const NavIcon = styled.div`
  color: green;
  font-size: 70px;
`;

export const NavLinkIcon = styled.div`
  color: green;
  margin-right: 10px;
  font-size: 35px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1145px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 1145px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  padding-right: 30px;
`;

export const NavLinks = styled(Link)`
  color: #fff !important;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;

  &:hover {
    border-bottom: 10px solid #c54b3c;
    transition: all 0.1s ease-out;
  }
`;

export const NavButton = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1145px) {
    display: none;
  }
`;

export const NavButtonLink = styled(Link)`
  border-radius: 50px;
  background: green;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 22px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #c54b3c;
    color: #fff;
  }
`;
