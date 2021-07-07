import React from 'react';
import { IconContext } from 'react-icons';
import { IconContainer, StyledButton } from './ChartStyle.js';

export default function SideButtons({ id, onClick, text, Icon }) {
  return (
    <StyledButton onClick={onClick}>
      {text}
      <IconContainer className="push-right">
        <IconContext.Provider value={{ color: '#fff' }}>
          {<Icon size={35} />}
        </IconContext.Provider>
      </IconContainer>
    </StyledButton>
  );
}
