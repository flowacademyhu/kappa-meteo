import React from 'react';
import { FaMapMarkedAlt, FaChartLine } from 'react-icons/fa';
import { VscDashboard } from 'react-icons/vsc';


import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="mapview">
            <FaMapMarkedAlt />
            Téképnézet
          </SidebarLink>
          <SidebarLink onClick={toggle} to="historicdata">
            <VscDashboard />
            Dashboard
          </SidebarLink>
          <SidebarLink onClick={toggle} to="diagrams">
            <FaChartLine />
            Diagramok
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
