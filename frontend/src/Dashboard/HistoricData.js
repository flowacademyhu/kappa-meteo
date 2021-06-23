import React, { useState, useEffect } from 'react';
import MeasureCard from '../MeasureCard/MeasureCard.js';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';

import { IconContext } from 'react-icons';
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

import 'swiper/swiper.scss';
import './SwiperDesign.css';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function HistoricData() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/api/test/12');
      response.data && setWeatherData(formatData(response.data));
    }
    fetchData();
  }, []);

  const formatData = (data) => {
    return [
      {
        iconType: 'WiThermometer',
        titleText: 'Levegő hőmérséklet',
        text: data.airData.airTemperature,
        unit: <>&#8451;</>,
        date: data.date,
      },

      {
        iconType: 'RiDashboard3Line',
        titleText: 'Légnyomás',
        text: data.airData.airPressure,
        unit: 'kPa',
        date: data.date,
      },
      {
        iconType: 'WiHumidity',
        titleText: 'Levegő páratartalom',
        text: data.airData.airHumidity,
        unit: '%',
        date: data.date,
      },

      {
        iconType: 'TiWeatherSnow',
        titleText: 'Fagy',
        text: data.miscData.freeze,
        unit: '',
        date: data.date,
      },

      {
        iconType: 'TiWeatherShower',
        titleText: 'Csapadék',
        text: data.miscData.rain,
        unit: 'mm',
        date: data.date,
      },

      {
        iconType: 'GiChaliceDrops',
        titleText: 'Csapadék számláló',
        text: data.miscData.precipitationCounter,
        unit: 'mm',
        date: data.date,
      },
      {
        iconType: 'RiLeafLine',
        titleText: 'Levélnedvesség',
        text: data.miscData.leafMoisture,
        unit: 'perc',
        date: data.date,
      },

      {
        iconType: 'RiCompassDiscoverFill',
        titleText: 'Szélirány',
        text: data.windData.windDirection,
        unit: '',
        date: data.date,
      },

      {
        iconType: 'IoMdRocket',
        titleText: 'Széllökés',
        text: data.windData.windGust,
        unit: 'km/h',
        date: data.date,
      },

      {
        iconType: 'VscDashboard',
        titleText: 'Szélsebesség',
        text: data.windData.windSpeed,
        unit: 'km/h"',
        date: data.date,
      },

      {
        iconType: 'WiThermometer',
        titleText: 'Talaj hőmérséklet 0cm',
        text: data.soilData.soilTemperature0cm,
        unit: <>&#8451;</>,
        date: data.date,
      },

      {
        iconType: 'GiDrop',
        titleText: 'Talaj nedvesség 30cm',
        text: data.soilData.soilMoisture30cm,
        unit: 'V/V %',
        date: data.date,
      },
      {
        iconType: 'GiDrop',
        titleText: 'Talaj nedvesség 60cm',
        text: data.soilData.soilMoisture60cm,
        unit: 'V/V %',
        date: data.date,
      },

      {
        iconType: 'GiDrop',
        titleText: 'Talaj nedvesség 90cm',
        text: data.soilData.soilMoisture90cm,
        unit: 'V/V %',
        date: data.date,
      },

      {
        iconType: 'GiDrop',
        titleText: 'Talaj nedvesség 120cm',
        text: data.soilData.soilMoisture120cm,
        unit: 'V/V %',
        date: data.date,
      },
      {
        iconType: 'HiSun',
        titleText: 'Besugárzás',
        text: data.miscData.irradiation,
        unit: 'W/m2',
        date: data.date,
      },

      {
        iconType: 'HiSun',
        titleText: 'Fényegység',
        text: data.miscData.lightUnit,
        unit: 'cd',
        date: data.date,
      },

      {
        iconType: 'RiBattery2ChargeLine',
        titleText: 'Napelem töltő feszültség',
        text: data.batteryData.solarCellChargingVoltage,
        unit: 'V',
        date: data.date,
      },

      {
        iconType: 'GiCarBattery',
        titleText: 'Külső akkufeszültség',
        text: data.batteryData.externalBatteryVoltage,
        unit: 'V',
        date: data.date,
      },

      {
        iconType: 'GiCarBattery',
        titleText: 'Belső akkufeszültség',
        text: data.batteryData.internalBatteryVoltage,
        unit: 'V',
        date: data.date,
      },
    ];
  };

  const getIcon = (str) => {
    switch (str) {
      case 'WiThermometer':
        return <WiThermometer size={100} />;
      case 'RiDashboard3Line':
        return <RiDashboard3Line size={100} />;
      case 'WiHumidity':
        return <WiHumidity size={100} />;
      case 'TiWeatherSnow':
        return <TiWeatherSnow size={100} />;
      case 'TiWeatherShower':
        return <TiWeatherShower size={100} />;
      case 'GiChaliceDrops':
        return <GiChaliceDrops size={100} />;
      case 'RiLeafLine':
        return <RiLeafLine size={100} />;
      case 'RiCompassDiscoverFill':
        return <RiCompassDiscoverFill size={100} />;
      case 'IoMdRocket':
        return <IoMdRocket size={100} />;
      case 'VscDashboard':
        return <VscDashboard size={100} />;
      case 'GiDrop':
        return <GiDrop size={100} />;
      case 'HiSun':
        return <HiSun size={100} />;
      case 'RiBattery2ChargeLine':
        return <RiBattery2ChargeLine size={100} />;
      case 'GiCarBattery':
        return <GiCarBattery size={100} />;
      default:
        return '';
    }
  };

  return (
    weatherData.length > 0 && (
      <div className="swiper-container">
        <h1>Hisztorikus adatok</h1>
        <Swiper
          spaceBetween={100}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 400,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={true}
          pagination={false}
          className="mySwiper"
        >
          {weatherData.map((el) => {
            return (
              <SwiperSlide>
                <div className="zoom">
                  <div className="card">
                    <IconContext.Provider value={{ color: '#c54b3c' }}>
                      {getIcon(el.iconType)}
                    </IconContext.Provider>
                    <MeasureCard
                      titleText={el.titleText}
                      text={el.text}
                      unit={el.unit}
                      lastData="Utolsó mért adat: "
                      footerText={el.date}
                    ></MeasureCard>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          ;
        </Swiper>
      </div>
    )
  );
}
