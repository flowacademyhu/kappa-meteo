import React from 'react';
import Video from '../videos/fileupload.mp4';
import {
  HeroContainer,
  HeroBg,
  MenuWrapper,
  MyVideo,
} from './FileUploadElements.js';

import FileUpload from './FileUpload';

export default function FileUploadHero() {
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <MyVideo autoPlay muted loop id="myVideo">
            <source src={Video} type="video/mp4" />
          </MyVideo>
          <MenuWrapper>
            <FileUpload />
          </MenuWrapper>
        </HeroBg>
      </HeroContainer>
    </>
  );
}