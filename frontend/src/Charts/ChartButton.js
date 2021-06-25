import React, { useState } from 'react';
import styled from 'styled-components';

export default function ChartButton({ id, label }) {
  const [isSwitched, setIsSwitched] = useState(false);

  const setSwitcher = () => {
    setIsSwitched(!isSwitched);
  };

  const Buttonstyle = styled.button`
    width: 185px;
    height: 60px;
    border-radius: 20px;
  `;

  return (
    <div className="col-2 p-2">
      <Buttonstyle
        onClick={setSwitcher}
        className={`${isSwitched ? 'btn btn-danger ' : 'btn btn-primary'}`}
        id={id}
      >
        {label}
      </Buttonstyle>
    </div>
  );
}
