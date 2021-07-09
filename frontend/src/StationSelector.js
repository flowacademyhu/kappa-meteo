import React from 'react';

const StationSelector = ({ stationsWithData }) => {
  return (
    stationsWithData !== null && (
      <>
        <option defaultValue value="">
          -
        </option>
        {stationsWithData &&
          stationsWithData.map((el) => (
            <option key={el.id} value={el.id}>
              {el.name}
            </option>
          ))}
      </>
    )
  );
};

export default StationSelector;
