import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MeasureCard from './MeasureCard.js';
import axios from 'axios';

import {
  RiCompassDiscoverFill,
  RiDashboard3Line,
  RiLeafLine,
  RiBattery2ChargeLine,
} from 'react-icons/ri';
import { IoMdRocket } from 'react-icons/io';
import { WiHumidity, WiThermometer } from 'react-icons/wi';
import { HiSun } from 'react-icons/hi';
import { TiWeatherShower, TiWeatherSnow } from 'react-icons/ti';
import { VscDashboard } from 'react-icons/vsc';
import { GiDrop, GiChaliceDrops, GiCarBattery } from 'react-icons/gi';

const formatData = (data) => {
  return [
    {
      icon: WiThermometer,
      titleText: 'Levegő hőmérséklet',
      text: data.airData.airTemperature,
      unit: <>&#8451;</>,
    },

    {
      icon: RiDashboard3Line,
      titleText: 'Légnyomás',
      text: data.airData.airPressure,
      unit: 'kPa',
    },
    {
      icon: WiHumidity,
      titleText: 'Levegő páratartalom',
      text: data.airData.airHumidity,
      unit: '%',
    },

    {
      icon: TiWeatherSnow,
      titleText: 'Fagy',
      text: data.miscData.freeze,
      unit: '',
    },

    {
      icon: TiWeatherShower,
      titleText: 'Csapadék',
      text: data.miscData.rain,
      unit: 'mm',
    },

    {
      icon: GiChaliceDrops,
      titleText: 'Csapadék számláló',
      text: data.miscData.precipitationCounter,
      unit: 'mm',
    },
    {
      icon: RiLeafLine,
      titleText: 'Levélnedvesség',
      text: data.miscData.leafMoisture,
      unit: 'perc',
    },

    {
      icon: RiCompassDiscoverFill,
      titleText: 'Szélirány',
      text: data.windData.windDirection,
      unit: '',
    },

    {
      icon: IoMdRocket,
      titleText: 'Széllökés',
      text: data.windData.windGust,
      unit: 'km/h',
    },

    {
      icon: VscDashboard,
      titleText: 'Szélsebesség',
      text: data.windData.windSpeed,
      unit: 'km/h"',
    },

    {
      icon: WiThermometer,
      titleText: 'Talaj hőmérséklet 0cm',
      text: data.soilData.soilTemperature0cm,
      unit: <>&#8451;</>,
    },

    {
      icon: GiDrop,
      titleText: 'Talaj nedvesség 30cm',
      text: data.soilData.soilMoisture30cm,
      unit: 'V/V %',
    },
    {
      icon: GiDrop,
      titleText: 'Talaj nedvesség 60cm',
      text: data.soilData.soilMoisture60cm,
      unit: 'V/V %',
    },

    {
      icon: GiDrop,
      titleText: 'Talaj nedvesség 90cm',
      text: data.soilData.soilMoisture90cm,
      unit: 'V/V %',
    },

    {
      icon: GiDrop,
      titleText: 'Talaj nedvesség 120cm',
      text: data.soilData.soilMoisture120cm,
      unit: 'V/V %',
    },
    {
      icon: HiSun,
      titleText: 'Besugárzás',
      text: data.miscData.irradiation,
      unit: 'W/m2',
    },

    {
      icon: HiSun,
      titleText: 'Fényegység',
      text: data.miscData.lightUnit,
      unit: 'cd',
    },

    {
      icon: RiBattery2ChargeLine,
      titleText: 'Napelem töltő feszültség',
      text: data.batteryData.solarCellChargingVoltage,
      unit: 'V',
    },

    {
      icon: GiCarBattery,
      titleText: 'Külső akkufeszültség',
      text: data.batteryData.externalBatteryVoltage,
      unit: 'V',
    },

    {
      icon: GiCarBattery,
      titleText: 'Belső akkufeszültség',
      text: data.batteryData.internalBatteryVoltage,
      unit: 'V',
    },
  ];
};

const TitleText = styled.h1`
  color: #fff;
  text-align: center;
`;

export default function HistoricData() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/api/test/12');
      response.data && setWeatherData(response.data);
    }
    fetchData();
  }, []);

  return (
    weatherData !== null && (
      <div className="container">
        <TitleText>Hisztorikus adatok</TitleText>
        {formatData(weatherData).map((data) => {
          return (
            <div className="row row-cols-1 row-cols-md-4 g-4 m-2">
              <div className="col">
                <MeasureCard
                  Icon={data.icon}
                  titleText={data.titleText}
                  text={data.text}
                  unit={data.unit}
                  footerText={weatherData.date}
                ></MeasureCard>
              </div>
            </div>
          );
        })}
        ;
      </div>
    )
  );
}
