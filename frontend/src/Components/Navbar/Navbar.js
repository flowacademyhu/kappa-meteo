import React from 'react';
import { FaBars, FaMapMarkedAlt, FaChartLine } from 'react-icons/fa';
import { WiDayLightning } from 'react-icons/wi';
import { VscDashboard } from 'react-icons/vsc';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavLinkIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavButton,
  NavButtonLink,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon>
              <WiDayLightning />
            </NavIcon>
            MeteOApp
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/mapview">
                <NavLinkIcon>
                  <FaMapMarkedAlt />
                </NavLinkIcon>
                Térképnézet
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/dashboardtomap">
                <NavLinkIcon>
                  <VscDashboard />
                </NavLinkIcon>
                Dashboard
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/diagrams">
                <NavLinkIcon>
                  <FaChartLine />
                </NavLinkIcon>
                Diagramok
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavButton>
            <NavButtonLink to="/upload">Fájl feltöltés</NavButtonLink>
          </NavButton>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
