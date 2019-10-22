import React from 'react';
import styled from 'styled-components';

const RoundWrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 6px;
  width: 100px;
  margin: auto;
  margin-top: 6px;
`

const Roundie = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  border: 1px solid #999999;
  // margin: 5px;
`

const AltRoundie = styled.div`
  :focus {
    background-color: black;
  }
`

const IMGWrap = styled.div`
  display: flex;
  flex-direction: column;
  // position: relative;
  overflow: hidden;
  height: 342px;
  width: 970px;
  margin-top: 25px;
  transition: left 3s ease-in-out;
`

const IMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`




class Dot extends React.Component {

  render() {
    const Test = styled.div`
      :focus {
        width: 20px;
      }
    `
    const currentSlide = this.props.currentId;
    const chosenfn = this.props.onSlideChosen;
    const slides = this.props.slides;
    const dots = slides.map((slide, index) => {
      const klass = index === currentSlide ? 'active' : '';
      // debugger
      return (
        <Test
          key={index}
          className={klass}
          onClick={() => chosenfn(index)}>
          <Roundie />{' '}
        </Test>
      );
    });
    return (
      <RoundWrap>
        {dots}
      </RoundWrap>
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



