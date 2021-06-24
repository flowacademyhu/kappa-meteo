import React from 'react';
import { FaBars, FaMapMarkedAlt, FaChartLine } from 'react-icons/fa';
import { WiDayLightning } from 'react-icons/wi';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon>
              <WiDayLightning size={80} />
            </NavIcon>
            MeteOApp
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/mapview">
                <FaMapMarkedAlt size={30} />
                Térképnézet
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/historicdata">
                <FaChartLine size={30} />
                Hisztorikus Adatok
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
