import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import CardElement from './CardElement';

import { GiRadarDish, GiInfo } from 'react-icons/gi';
import { RiDashboard2Line } from 'react-icons/ri';

import 'swiper/swiper.scss';
import './SwiperMenuElements.css';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);


export const NavLinks = styled(Link)`
  color: #fff !important;
  text-decoration: none;
  cursor: pointer;
  `;

export default function SwiperMenu() {
  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={200}
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
          <NavLinks to="/mapview">
            <CardElement 
            Icon={GiRadarDish} 
            text="Állomások"></CardElement>
          </NavLinks>
        </SwiperSlide>
        <SwiperSlide>
          <NavLinks to="/historicdata">
            <CardElement
              Icon={RiDashboard2Line}
              text="Hisztorikus adatok"
            ></CardElement>
          </NavLinks>
        </SwiperSlide>
        <SwiperSlide>
          <CardElement
            Icon={GiInfo}
            text="Információ"
          ></CardElement>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
