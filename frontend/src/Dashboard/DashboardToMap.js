import { NavLink, StyleZoom, InfoStyle, CardData } from './StyledElements';
import React from 'react';

function DashboardToMap() {
  return (
    <div className="container">
      <NavLink to="/mapview">
        <StyleZoom>
          <InfoStyle>
            <CardData>Válasszon állomást a térképen!</CardData>
          </InfoStyle>
        </StyleZoom>
      </NavLink>
    </div>
  );
}

export default DashboardToMap;
