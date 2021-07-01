import React from 'react';

export default function MyCheckbox({ label, name, changeMeasurement }) {
  return (
    <div className="container">
      <input
        type="checkbox"
        name={name}
        onChange={() => {
          changeMeasurement(name);
        }}
      />
      <label htmlFor={name}> {label} </label>
    </div>
  );
}
