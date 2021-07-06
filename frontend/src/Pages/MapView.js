import React from 'react';
import Map from '../Map/Map';
import cloudyday2 from '../Icon/AnimateIcon/cloudy-day-2.svg';
import cloudy from '../Icon/AnimateIcon/cloudy.svg';
import day from '../Icon/AnimateIcon/day.svg';
import rainy1 from '../Icon/AnimateIcon/rainy-1.svg';
import rainy6 from '../Icon/AnimateIcon/rainy-6.svg';

let icons = [cloudyday2, cloudy, day, rainy1, rainy6, day];
var myrng = new Math.seedrandom('hello.');

const iconChooser = (icons) => {
  let i = 0;
  let testArray = [];
  while (i < 238) {
    let randomNum = Math.floor(myrng() * 6);
    let icon = icons[randomNum];
    testArray.push(icon);
    i++;
  }
  return testArray;
};

export default function MapView() {
  let weatherIcons = iconChooser(icons);
  return (
    <div className="m-1 p-2">
      <Map weatherIcons={weatherIcons} />
    </div>
  );
}
