import React from 'react';
import { FaBars, FaMapMarkedAlt, FaChartLine } from 'react-icons/fa';
import { WiDayLightning } from 'react-icons/wi';
import { VscDashboard } from 'react-icons/vsc';

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
                <VscDashboard size={30} />
                Dashboard
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/diagrams">
                <FaChartLine size={30} />
                Diagramok
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
