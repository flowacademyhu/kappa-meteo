import React from 'react';
import Video from '../../videos/video1.mp4';
import { HeroContainer, HeroBg, MenuWrapper, MyVideo } from './HeroElements';

import SwiperMenu from '../SwiperMenu/MenuCards';

export default function HeroSection() {
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <MyVideo autoPlay muted loop id="myVideo">
            <source src={Video} type="video/mp4" />
          </MyVideo>
          <MenuWrapper>
            <SwiperMenu />
          </MenuWrapper>
        </HeroBg>
      </HeroContainer>
    </>
  );
}
