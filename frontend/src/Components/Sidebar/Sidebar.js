import React from 'react';
import { FaMapMarkedAlt, FaChartLine } from 'react-icons/fa';
import { VscDashboard } from 'react-icons/vsc';

import {
  SidebarContainer,
  Icon,
  NavLinkIcon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements';

export default function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="mapview">
            <NavLinkIcon>
            <FaMapMarkedAlt />
            </NavLinkIcon>
            Térképnézet
          </SidebarLink>
          <SidebarLink onClick={toggle} to="historicdata">
            <NavLinkIcon>
            <VscDashboard />
            </NavLinkIcon>
            Dashboard
          </SidebarLink>
          <SidebarLink onClick={toggle} to="diagrams">
          <NavLinkIcon>
            <FaChartLine />
            </NavLinkIcon>
            Diagramok
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
