import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Slideshow from './SlideshowV1/Slideshow';
import PrintIndexContainer from '../prints/PrintIndexContainer'
import SlideshowV2 from './SlideshowV2/Slideshow_rev2';
import CollectionCards from '../cards/CollectionCard/CollectionCards'

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
  margin-top: 0px;
  justify-content: space-between;
`

const Feed = styled.section`
  padding: 20px;
  margin-top: 18px;
  height: 460px;
  width: 300px;
  // background-color: green;
  border: 1px solid #ececec;
  background-color: white;
  margin-right: 20px;
  overflow: hidden;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  margin-bottom: 110px;
`

const Featured = styled.section`
  margin-top: 18px;
  height: 350px;
  // height: 1605px;
  width: 630px;
  // border: 1px solid #bebebe;
  overflow: hidden;
  background: white;
  padding: 20px;
  border: 1px solid #ececec;
`

const FeatureTitle = styled.h1`
  font-size: 20px;
  color: #666666;
  margin-bottom: 2px;
  font-family: Helvetica, Arial, sans-serif;
`

const FeedTitle = styled.h1`
  font-size: 20px;
  color: #666666;
  margin-bottom: 20px;
  font-family: Helvetica, Arial, sans-serif;
`

const FeatureSub = styled.h1`
  font-size: 14px;
  color: #666666;
  font-family: Helvetica, Arial, sans-serif;
  margin-bottom: 10px;
`

const FeatureLink = styled.p`
  font-size: 14px;
  color: #666666;
  font-family: Helvetica, Arial, sans-serif;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
`


class Home extends React.Component {
  constructor(props) {
    super(props);
    let slides = [
      'https://cdn.thingiverse.com/renders/f8/65/dc/43/25/6a4dcdade75e2d5adc996507c736d3eb_preview_featured.jpg',
      'http://blog.zmorph3d.com/wp-content/uploads/2016/02/ZMorph-3D-printed-orthosis-wide2-1620x975.jpg',
      'https://miro.medium.com/max/1240/1*0BFYCIPehPSdhw_tpgmdKg.jpeg',
      // 'https://www.simplify3d.com/wp-content/uploads/2019/04/3d-printed-pla-filament-1024x773-1024x773.jpg',
      // 'http://static1.squarespace.com/static/509c281de4b0cd18c7335aab/t/5ad9f62c2b6a28918def66e2/1524233776916/Quad_FullMixPrint_2_3_2_result.jpg?format=1500w',
    ]
    this.slides = slides;
  }

  componentDidMount() {
    this.props.fetchCollections();
  }

  render() {
    return (
      <>
        {/* Slideshow Option One */}
        <div className={s.container}>
          <div className={s.main}>
            <Slideshow slides={this.slides} />
          </div>
        </div>

        {/* Slideshow Option Two */}
        {/* <div >
          <div >
            <SlideshowV2 slides={this.slides} />
          </div>
        </div> */}

        {/* Area Under Slideshow */}
        <Section2>

          {/* To be Filled Out */}
          <Feed>
            <FeedTitle>Featured Collections</FeedTitle>
            <CollectionCards 
              collectionIds={this.props.collectionIds}
              mini
            />
            {/* <PrintIndexContainer /> */}
          </Feed>

          {/* Needs Update to Collection Rather than Prints */}
          <Featured>

            <FeatureTitle>Featured Prints</FeatureTitle>
            <FeatureSub>Download and print today</FeatureSub>

            <Link 
              to="/allprints"
              style={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              <FeatureLink>see more</FeatureLink>
            </Link>

            {/* Displays All Prints */}
            <PrintIndexContainer/>

          </Featured>

        </Section2>
      </>
    )
  }
  
}

export default Home 