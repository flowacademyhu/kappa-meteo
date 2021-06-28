import { DateRange } from 'react-date-range';
import React, { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export default function DatePicker({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) {
  const [state, setState] = useState([
    {
      startDate: new Date('2021-01-01'),
      endDate: new Date('2021-04-30'),
      key: 'selection',
    },
  ]);

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
