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
      setWeatherData(response.data);
    }
    fetchData();
  }, []);

  return (
    Object.keys(weatherData).length > 0 && (
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
          <SwiperSlide>
            <div className="zoom">
              <div className="card">
                <IconContext.Provider value={{ color: '#c54b3c' }}>
                  <WiThermometer size={100} />
                </IconContext.Provider>
                <MeasureCard
                  titleText="Levegő hőmérséklet"
                  text={weatherData.airData.airTemperature}
                  unit="&#8451;"
                  lastData="Utolsó mért adat: "
                  footerText={weatherData.date}
                ></MeasureCard>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="zoom">
              <div className="card">
                <IconContext.Provider value={{ color: '#c54b3c' }}>
                  <RiDashboard3Line size={100} />
                </IconContext.Provider>
                <MeasureCard
                  titleText="Légnyomás"
                  text={weatherData.airData.airPressure}
                  unit="kPa"
                  lastData="Utolsó mért adat: "
                  footerText={weatherData.date}
                ></MeasureCard>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="zoom">
              <div className="card">
                <IconContext.Provider value={{ color: '#c54b3c' }}>
                  <WiHumidity size={100} />
                </IconContext.Provider>
                <MeasureCard
                  titleText="Levegő páratartalom"
                  text={weatherData.airData.airHumidity}
                  unit="%"
                  lastData="Utolsó mért adat: "
                  footerText={weatherData.date}
                ></MeasureCard>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="zoom">
              <div className="card">
                <IconContext.Provider value={{ color: '#c54b3c' }}>
                  <TiWeatherSnow size={100} />
                </IconContext.Provider>
                <MeasureCard
                  titleText="Fagy"
                  text={weatherData.miscData.freeze}
                  unit=""
                  lastData="Utolsó mért adat: "
                  footerText={weatherData.date}
                ></MeasureCard>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="zoom">
              <div className="card">
                <IconContext.Provider value={{ color: '#c54b3c' }}>
                  <TiWeatherShower size={100} />
                </IconContext.Provider>
                <MeasureCard
                  titleText="Csapadék"
                  text={weatherData.miscData.rain}
                  unit="mm"
                  lastData="Utolsó mért adat: "
                  footerText={weatherData.date}
                ></MeasureCard>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="zoom">
              <div className="card">
                <IconContext.Provider value={{ color: '#c54b3c' }}>
                  <GiChaliceDrops size={100} />
                </IconContext.Provider>
                <MeasureCard
                  titleText="Csapadék számláló"
                  text={weatherData.miscData.precipitationCounter}
                  unit="mm"
                  lastData="Utolsó mért adat: "
                  footerText={weatherData.date}
                ></MeasureCard>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="zoom">
              <div className="card">
                <IconContext.Provider value={{ color: '#c54b3c' }}>
                  <RiLeafLine size={100} />
                </IconContext.Provider>
                <MeasureCard
                  titleText="Levélnedvesség"
                  text={weatherData.miscData.leafMoisture}
                  unit="perc"
                  lastData="Utolsó mért adat: "
                  footerText={weatherData.date}
                ></MeasureCard>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="zoom">
              <div className="card">
                <IconContext.Provider value={{ color: '#c54b3c' }}>
                  <RiCompassDiscoverFill size={100} />
                </IconContext.Provider>
                <MeasureCard
                  titleText="Szélirány"
                  text={weatherData.windData.windDirection}
                  unit=""
                  lastData="Utolsó mért adat: "
                  footerText={weatherData.date}
                ></MeasureCard>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="zoom">
              <div className="card">
                <IconContext.Provider value={{ color: '#c54b3c' }}>
                  <IoMdRocket size={100} />
                </IconContext.Provider>
                <MeasureCard
                  titleText="Széllökés"
                  text={weatherData.windData.windGust}
                  unit="km/h"
                  lastData="Utolsó mért adat: "
                  footerText={weatherData.date}
                ></MeasureCard>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="zoom">
              <div className="card">
                <IconContext.Provider value={{ color: '#c54b3c' }}>
                  <VscDashboard size={100} />
                </IconContext.Provider>
                <MeasureCard
                  titleText="Szélsebesség"
                  text={weatherData.windData.windSpeed}
                  unit="km/h"
                  lastData="Utolsó mért adat: "
                  footerText={weatherData.date}
                ></MeasureCard>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="zoom">
              <div className="card">
                <IconContext.Provider value={{ color: '#c54b3c' }}>
                  <WiThermometer size={100} />
                </IconContext.Provider>
                <MeasureCard
                  titleText="Talaj hőmérséklet 0cm"
                  text={weatherData.soilData.soilTemperature0cm}
                  unit="&#8451;"
                  lastData="Utolsó mért adat: "
                  footerText={weatherData.date}
                ></MeasureCard>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="zoom">
              <div className="card">
                <IconContext.Provider value={{ color: '#c54b3c' }}>
                  <GiDrop size={100} />
                </IconContext.Provider>
                <MeasureCard
                  titleText="Talaj nedvesség 30cm"
                  text={weatherData.soilData.soilMoisture30cm}
                  unit="V/V %"
                  lastData="Utolsó mért adat: "
                  footerText={weatherData.date}
                ></MeasureCard>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="zoom">
              <div className="card">
                <IconContext.Provider value={{ color: '#c54b3c' }}>
                  <GiDrop size={100} />
                </IconContext.Provider>
                <MeasureCard
                  titleText="Talaj nedvesség 60cm"
                  text={weatherData.soilData.soilMoisture60cm}
                  unit="V/V %"
                  lastData="Utolsó mért adat: "
                  footerText={weatherData.date}
                ></MeasureCard>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="zoom">
              <div className="card">
                <IconContext.Provider value={{ color: '#c54b3c' }}>
                  <GiDrop size={100} />
                </IconContext.Provider>
                <MeasureCard
                  titleText="Talaj nedvesség 90cm"
                  text={weatherData.soilData.soilMoisture90cm}
                  unit="V/V %"
                  lastData="Utolsó mért adat: "
                  footerText={weatherData.date}
                ></MeasureCard>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="zoom">
              <div className="card">
                <IconContext.Provider value={{ color: '#c54b3c' }}>
                  <GiDrop size={100} />
                </IconContext.Provider>
                <MeasureCard
                  titleText="Talaj nedvesség 120cm"
                  text={weatherData.soilData.soilMoisture120cm}
                  unit="V/V %"
                  lastData="Utolsó mért adat: "
                  footerText={weatherData.date}
                ></MeasureCard>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="zoom">
              <div className="card">
                <IconContext.Provider value={{ color: '#c54b3c' }}>
                  <HiSun size={100} />
                </IconContext.Provider>
                <MeasureCard
                  titleText="Besugárzás"
                  text={weatherData.miscData.irradiation}
                  unit="W/m2"
                  lastData="Utolsó mért adat: "
                  footerText={weatherData.date}
                ></MeasureCard>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="zoom">
              <div className="card">
                <IconContext.Provider value={{ color: '#c54b3c' }}>
                  <HiSun size={100} />
                </IconContext.Provider>
                <MeasureCard
                  titleText="Fényegység"
                  text={weatherData.miscData.lightUnit}
                  unit="cd"
                  lastData="Utolsó mért adat: "
                  footerText={weatherData.date}
                ></MeasureCard>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="zoom">
              <div className="card">
                <IconContext.Provider value={{ color: '#c54b3c' }}>
                  <RiBattery2ChargeLine size={100} />
                </IconContext.Provider>
                <MeasureCard
                  titleText="Napelem töltő feszültség"
                  text={weatherData.batteryData.solarCellChargingVoltage}
                  unit="V"
                  lastData="Utolsó mért adat: "
                  footerText={weatherData.date}
                ></MeasureCard>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="zoom">
              <div className="card">
                <IconContext.Provider value={{ color: '#c54b3c' }}>
                  <GiCarBattery size={100} />
                </IconContext.Provider>
                <MeasureCard
                  titleText="Külső akkufeszültség"
                  text={weatherData.batteryData.externalBatteryVoltage}
                  unit="V"
                  lastData="Utolsó mért adat: "
                  footerText={weatherData.date}
                ></MeasureCard>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="zoom">
              <div className="card">
                <IconContext.Provider value={{ color: '#c54b3c' }}>
                  <GiCarBattery size={100} />
                </IconContext.Provider>
                <MeasureCard
                  titleText="Belső akkufeszültség"
                  text={weatherData.batteryData.internalBatteryVoltage}
                  unit="V"
                  lastData="Utolsó mért adat: "
                  footerText={weatherData.date}
                ></MeasureCard>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    )
  );
}
