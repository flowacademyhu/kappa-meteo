import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StationSelector = () => {
  const [stationsWithData, setStationsWithData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/api/stations/hasdata`);
        if (response.data) {
          setStationsWithData(response.data);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

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
