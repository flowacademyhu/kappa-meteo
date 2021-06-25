import React from 'react';
import { FaMapMarkedAlt, FaChartLine } from 'react-icons/fa';
import { GiInfo } from 'react-icons/gi';

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
            <FaChartLine />
            Hisztorikus Adatok
          </SidebarLink>
          <SidebarLink onClick={toggle} to="info">
            <GiInfo />
            Információ
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
