import React, { useState, useEffect } from 'react';
import MeasureCard from '../MeasureCard/MeasureCard.js';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';

import { IconContext } from 'react-icons';
import {
  RiCompassDiscoverFill,
  RiDashboard3Line,
  RiLeafLine, RiBattery2ChargeLine
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

export default function SwiperCards() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios.get(`http://localhost:8081/api/test/12`);
      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

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
          
        </Swiper>
      </div>
    )
  );
}
