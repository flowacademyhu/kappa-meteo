import React from 'react';
import Video from '../../videos/Welcome2.mp4';
import { HeroContainer, HeroBg, MenuWrapper, MyVideo } from './HeroElements';

import SwiperMenu from '../SwiperMenu/Menu';

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
