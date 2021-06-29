import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';
import { NavLinks } from './StyledElements';
import CardElement from './CardElement';

import { GiRadarDish } from 'react-icons/gi';
import { RiDashboard2Line } from 'react-icons/ri';
import { FaChartLine } from 'react-icons/fa';

import 'swiper/swiper.scss';
import './Style.css';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

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
              text="Állomások"
              descript="Országos térkép, valamint a moduláris mérőállomások megjelenitése."
            ></CardElement>
          </NavLinks>
        </SwiperSlide>
        <SwiperSlide>
          <NavLinks to="/historicdata">
            <CardElement
              Icon={RiDashboard2Line}
              text="Dashboard"
              descript="Mérőállomások mért adatainak rendezett megtekintése Dashbordon."
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
      </Swiper>
    </div>
  );
}
