import React from 'react';
import Slide from './SlideV2';
import Dots from './DotsV2';
import styled from 'styled-components';


const slides = [
  'https://www.simplify3d.com/wp-content/uploads/2019/04/3d-printed-pla-filament-1024x773-1024x773.jpg',
  'http://static1.squarespace.com/static/509c281de4b0cd18c7335aab/t/5ad9f62c2b6a28918def66e2/1524233776916/Quad_FullMixPrint_2_3_2_result.jpg?format=1500w',
  'https://cdn.thingiverse.com/renders/f8/65/dc/43/25/6a4dcdade75e2d5adc996507c736d3eb_preview_featured.jpg']

class SlideshowV2 extends React.Component {
  render() {
    return (
      <Dots slides={slides}/>
    )
  }

}

export default SlideshowV2