import React from 'react';
import styled from 'styled-components';

import Slideshow from './Slideshow';
import FeedCardContainer from '../prints/FeedCardContainer.js'
import SlideshowV2 from './Slideshow_rev2';

const FirstContent = styled.div`
  height: 341px;
  width: 970px;
  margin-top: 25px;
  background-image: url(https://www.machinedesign.com/sites/machinedesign.com/files/G1-article-version_0.jpg);
  background-position: center;
  background-size: cover;
  position: relative;
`

const s = {
  container: "screenW screenH dGray col",
  header: "flex1 fCenter fSize2",
  main: "flex8 white",
  footer: "flex1 fCenter"
};

const Section2 = styled.section`
  display: flex;
  width: 970px;
  height: 460px;
  // background-color: red;
  margin-top: 20px;
  justify-content: space-between;
`

const Feed = styled.section`
  height: 460px;
  width: 320px;
  // background-color: green;
  border: 1px solid #bebebe;
`

const Featured = styled.section`
  height: 460px;
  width: 630px;
  // background-color: green;
  border: 1px solid #bebebe;
`


class Home extends React.Component {
  constructor(props) {
    super(props);
    let slides = [
      'https://www.simplify3d.com/wp-content/uploads/2019/04/3d-printed-pla-filament-1024x773-1024x773.jpg',
      'http://static1.squarespace.com/static/509c281de4b0cd18c7335aab/t/5ad9f62c2b6a28918def66e2/1524233776916/Quad_FullMixPrint_2_3_2_result.jpg?format=1500w',
      'https://cdn.thingiverse.com/renders/f8/65/dc/43/25/6a4dcdade75e2d5adc996507c736d3eb_preview_featured.jpg']
    this.slides = slides;
  }


 

  render() {
    return (
      <>
        <div className={s.container}>
          <div className={s.main}>
            <Slideshow slides={this.slides} />
          </div>
        </div>
        <div className={s.container}>
          <div className={s.main}>
            <SlideshowV2 slides={this.slides} />
          </div>
        </div>
        {/* <Section2>
          <Feed>
            <FeedCardContainer />
          </Feed>
          <Featured>
            <FeedCardContainer/>
          </Featured>

        </Section2> */}
      </>
    )
  }
  
}

export default Home 