import React from 'react';
import Video from '../videos/fileupload.mp4';
import {
  HeroContainer,
  HeroBg,
  MenuWrapper,
  MyVideo,
} from './FileUploadElements.js';

import FileUploadLogic from './FileUploadLogic';

export default function FileUpload() {
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <MyVideo autoPlay muted loop id="myVideo">
            <source src={Video} type="video/mp4" />
          </MyVideo>
          <MenuWrapper>
            <FileUploadLogic />
          </MenuWrapper>
        </HeroBg>
      </HeroContainer>
    </>
  );
}