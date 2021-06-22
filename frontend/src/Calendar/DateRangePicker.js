import { DateRange } from 'react-date-range';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';


export default function DateRangePicker() {
  const [state, setState, weatherData, setWeatherData] = useState([
    {
      startDate: new Date('2021-01-01'),
      endDate: new Date('2021-01-01'),
      key: 'selection',
    },
  ]);

  useEffect(() => {
    try {
      const response = axios.get(`http://localhost:8080/api/ten`);
      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <DateRange
      editableDateInputs={true}
      rangeColors={['#c54b3c']}
      onChange={(item) => setState([item.selection])}
      moveRangeOnFirstSelection={false}
      ranges={state}
      minDate={new Date('2021-01-01')}
      maxDate={new Date('2021-04-30')}
    />
  );
}
