import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';
import { NavLinks, SwiperContainer } from './StyledElements';
import CardElement from './CardElement';
import { GiRadarDish } from 'react-icons/gi';
import { RiDashboard2Line } from 'react-icons/ri';
import { FaChartLine } from 'react-icons/fa';
import { ImUpload } from 'react-icons/im';

import 'swiper/swiper.scss';
import './Style.css';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function SwiperMenu() {
  return (
    <SwiperContainer className="swiper-container">
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
              text="Állomások"
              descript="Országos térkép, saját lokáció, valamint a moduláris mérőállomások megjelenitése."
            ></CardElement>
          </NavLinks>
        </SwiperSlide>
        <SwiperSlide>
          <NavLinks to="/dashboardtomap">
            <CardElement
              Icon={RiDashboard2Line}
              text="Dashboard"
              descript="Mérőállomások mért adatainak csoportositott megtekintése Dashbordon."
            ></CardElement>
          </NavLinks>
        </SwiperSlide>
        <SwiperSlide>
          <NavLinks to="/diagrams">
            <CardElement
              Icon={FaChartLine}
              text="Diagramok"
              descript="Mért adatok diagramos megjelenitése, kimutatása és összehasonlitása."
            ></CardElement>
          </NavLinks>
        </SwiperSlide>
        <SwiperSlide>
          <NavLinks to="/upload">
            <CardElement
              Icon={ImUpload}
              text="Fájl feltöltés"
              descript="Állomásadatok feltöltése, majd megjelenitése Dashboardon és Diagramon."
            ></CardElement>
          </NavLinks>
        </SwiperSlide>
      </Swiper>
    </SwiperContainer>
  );
}
