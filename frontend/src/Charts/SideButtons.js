import React from 'react';
import { IconContext } from 'react-icons';
import { IconContainer } from './ChartStyle.js';
import './Charts.css';

export default function SideButtons({ id, onClick, text, Icon }) {
  return (
    <button id={id} onClick={onClick}>
      {text}
      <IconContainer className="push-right">
        <IconContext.Provider value={{ color: '#fff' }}>
          {<Icon size={35} />}
        </IconContext.Provider>
      </IconContainer>
    </button>
  );
}
