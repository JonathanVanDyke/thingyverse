import React from 'react';
import styled from 'styled-components';

const RoundWrap = styled.div`
  display: flex;
  justify-content: space-around;
`

const Roundie = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: blue;
`

const IMGWrap = styled.div`
  display: flex;
  flex-direction: column;
  // position: relative;
  overflow: hidden;
  height: 342px;
  width: 970px;
  margin-top: 25px;
`

const IMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`


class Dot extends React.Component {
  render() {
    const currentSlide = this.props.currentId;
    const chosenfn = this.props.onSlideChosen;
    const slides = this.props.slides;
    const headers = slides.map((slide, index) => {
      const klass = index === currentSlide ? 'active' : '';
      return (
        <div
          key={index}
          className={klass}
          onClick={() => chosenfn(index)}>
          <Roundie />{' '}
        </div>
      );
    });
    return (
      <ul className='tab-header'>
        {headers}
      </ul>
    )
  }
};

export default class Dots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: 0
    };
    this.selectSlide = this.selectSlide.bind(this);
  }

  selectSlide(num) { //kind of like a state setter
    this.setState({ currentId: num });
  }

  render() {
    const image = this.props.slides[this.state.currentId];

    return (
      <div>
        <IMGWrap>
          <IMG src={image}></IMG>
        </IMGWrap>
        <RoundWrap>
          <Dot
            currentId={this.state.currentId}
            onSlideChosen={this.selectSlide}
            slides={this.props.slides}
          />
  
        </RoundWrap>

      </div>
    );
  }
}



