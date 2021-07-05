import React from 'react';

export default function MyCheckbox({ label, name, changeMeasurement }) {
  return (
    <div className="col p-2">
      <input
        type="checkbox"
        name={name}
        onChange={() => {
          changeMeasurement(name);
        }}
      />
      <label className="m-2" htmlFor={name}>
        {' '}
        {label}{' '}
      </label>
    </div>
  );
}
