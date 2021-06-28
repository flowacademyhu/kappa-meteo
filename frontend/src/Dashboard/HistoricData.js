import React, { useState, useEffect } from 'react';
import MeasureCard from './MeasureCard.js';
import axios from 'axios';
import {
  TitleText,
  GroupText,
  CardBorder,
  MiscGrid,
  WindGrid,
  SoilGrid,
  BatteryGrid,
} from './StyledElements.js';

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

const miscData = (data) => {
  return [
    {
      icon: TiWeatherSnow,
      titleText: 'Fagy',
      text: isFreeze(data.miscData.freeze),
      unit: '',
    },

    {
      icon: TiWeatherShower,
      titleText: 'Csapadék',
      text: data.miscData.rain,
      unit: 'mm',
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
  ];
};
const airData = (data) => {
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
  ];
};
const windData = (data) => {
  return [
    {
      icon: RiCompassDiscoverFill,
      titleText: 'Szélirány',
      text: windDirection(data.windData.windDirection),
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
      unit: 'km/h',
    },
  ];
};
const soilData = (data) => {
  return [
    {
      icon: WiThermometer,
      titleText: 'Talaj hőmérséklet 0cm',
      text: data.soilData.soilTemperature0cm.toFixed(2),
      unit: <>&#8451;</>,
    },

    {
      icon: GiDrop,
      titleText: 'Talaj nedvesség 30cm',
      text: data.soilData.soilMoisture30cm.toFixed(2),
      unit: 'V/V %',
    },
    {
      icon: GiDrop,
      titleText: 'Talaj nedvesség 60cm',
      text: data.soilData.soilMoisture60cm.toFixed(2),
      unit: 'V/V %',
    },

    {
      icon: GiDrop,
      titleText: 'Talaj nedvesség 90cm',
      text: data.soilData.soilMoisture90cm.toFixed(2),
      unit: 'V/V %',
    },

    {
      icon: GiDrop,
      titleText: 'Talaj nedvesség 120cm',
      text: data.soilData.soilMoisture120cm.toFixed(2),
      unit: 'V/V %',
    },
  ];
};
const batteryData = (data) => {
  return [
    {
      icon: RiBattery2ChargeLine,
      titleText: 'Napelem töltő feszültség',
      text: data.batteryData.solarCellChargingVoltage.toFixed(2),
      unit: 'V',
    },

    {
      icon: GiCarBattery,
      titleText: 'Külső akkufeszültség',
      text: data.batteryData.externalBatteryVoltage.toFixed(2),
      unit: 'V',
    },

    {
      icon: GiCarBattery,
      titleText: 'Belső akkufeszültség',
      text: data.batteryData.internalBatteryVoltage.toFixed(2),
      unit: 'V',
    },
  ];
};

const windDirection = (wind) => {
  if (wind < 22.5 || wind > 337.5) {
    return 'Északi';
  } else if (wind < 67.5) {
    return 'Észak-Keleti';
  } else if (wind < 112.5) {
    return 'Keleti';
  } else if (wind < 157.5) {
    return 'Dél-Keleti';
  } else if (wind < 202.5) {
    return 'Déli';
  } else if (wind < 247.5) {
    return 'Dél-Nyugati';
  } else if (wind < 292.5) {
    return 'Nyugati';
  } else if (wind < 337.5) {
    return 'Észak-Nyugati';
  }
};

const isFreeze = (freeze) => {
  if (freeze > 0) {
    return 'Nem volt fagy';
  } else if (freeze <= 0) {
    return 'Fagyott';
  }
};

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
      <>
        <TitleText>Dashboard</TitleText>
        <div className="container">
          <div className="row">
            <CardBorder className="col">
              <GroupText>Vegyes adatok:</GroupText>
              <MiscGrid>
                {miscData(weatherData).map((data) => {
                  return (
                    <div className="p-2 m-2" key={data.titleText}>
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
              </MiscGrid>
            </CardBorder>
            <CardBorder className="col">
              <GroupText>Levegő adatok:</GroupText>
              {airData(weatherData).map((data) => {
                return (
                  <div className="p-2 m-2" key={data.titleText}>
                    <MeasureCard
                      Icon={data.icon}
                      titleText={data.titleText}
                      text={data.text}
                      unit={data.unit}
                      footerText={weatherData.date}
                    ></MeasureCard>
                  </div>
                );
              })}
              ;
            </CardBorder>
          </div>
          <CardBorder>
            <GroupText>Szél adatok:</GroupText>
            <WindGrid>
              {windData(weatherData).map((data) => {
                return (
                  <div className="p-2 m-2" key={data.titleText}>
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
            </WindGrid>
          </CardBorder>
          <CardBorder>
            <GroupText>Talajnedvesség adatok:</GroupText>
            <SoilGrid>
              {soilData(weatherData).map((data) => {
                return (
                  <div className="p-2 m-2" key={data.titleText}>
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
            </SoilGrid>
          </CardBorder>
          <CardBorder>
            <GroupText>Akkumulátor adatok:</GroupText>
            <BatteryGrid>
              {batteryData(weatherData).map((data) => {
                return (
                  <div className="p-2 m-2" key={data.titleText}>
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
            </BatteryGrid>
          </CardBorder>
        </div>
      </>
    )
  );
}
