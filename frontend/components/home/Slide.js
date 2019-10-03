import React from 'react';
import styled from 'styled-components';
import { posix } from 'path';

const s = {
  container: "abs fullW fullH",
  slideImage: "fullH fullW imgCover"
};

const Slide = ({ position, transition, image }) => {
  //!creates a container with destructured css stylesheets
  //** img src set to image prop... styled */
  return (
    <div className={s.container + " " + position + " " + transition}>
      <img src={image} className={s.slideImage} alt="slide" />
    </div>
  )
};

export default Slide;