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
    <div >
      <img src={image} />
    </div>
  )
};

export default Slide;