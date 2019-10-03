import React from 'react';
import styled from 'styled-components';

import Slide from './Slide';

const FirstContent = styled.div`
  height: 341px;
  width: 970px;
  margin-top: 25px;
  background-image: url(https://www.machinedesign.com/sites/machinedesign.com/files/G1-article-version_0.jpg);
  background-position: center;
  background-size: cover;
  position: relative;
`

const Testp = styled.p`
  position: absolute
  margin-top: 100px;
  height: 256px;
  width: 202px;
  z-index: 1000;
  background: 
url('https://miro.medium.com/max/202/1*JP-9BizwTVXEqcDhRLlR9A.png') 0px 0px;
`

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.test = <div></div>;
    this.state = {idx: 0};
    let arr = [
      'https://www.simplify3d.com/wp-content/uploads/2019/04/3d-printed-pla-filament-1024x773-1024x773.jpg',
      'http://static1.squarespace.com/static/509c281de4b0cd18c7335aab/t/5ad9f62c2b6a28918def66e2/1524233776916/Quad_FullMixPrint_2_3_2_result.jpg?format=1500w',
      'https://cdn.thingiverse.com/renders/f8/65/dc/43/25/6a4dcdade75e2d5adc996507c736d3eb_preview_featured.jpg']
    this.slides = arr.map((url) => {
      return (
        <Slide
          url={url}
          key={url}
        />
      )
    })
  }


  animate(slides) {
    setInterval(() => this.setState({ idx: (this.state.idx + 1) % slides.length }), 2000)
  }

  componentDidMount() {
    this.animate(this.slides)
  }

  render() {




    return (
      <>
        <FirstContent></FirstContent>
        <ul>
          {this.slides[this.state.idx]}
        </ul>
      </>
    )
  }
  
}

export default Home 