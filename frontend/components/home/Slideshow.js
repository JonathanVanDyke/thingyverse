import React from 'react';
import Slide from './Slide';
import Dots from './Dots';
import styled from 'styled-components';

//this container directly references the stylesheet ?

const s = {
  container: "fullW fullH rel overflowH",
  onScreen: "left0",
  offScreenRight: "left100vw",
  offScreenLeft: 'leftM100vw',
  transition: "transition1l"
};

const PlayPause = styled.div`
  position: relative;
  align-self: flex-end;
  margin-bottom: 19px;
  margin-left: 8px;
  padding: 10px;
  background-color: white;
  opacity: .5;
  border-radius: 5px;
  :hover {
    opacity: 1;
  }
`

class Slideshow extends React.Component {
  constructor(props) {

    super(props);
    //local component state!
    //to be manipulated later
    this.state = {
      slide1: {
        id: 0,
        position: s.onScreen,
        transition: true
      },
      slide2: {
        id: 1,
        position: s.offScreenRight,
        transition: true
      },
      currentId: 0
    };
    let tog = true;
    this.tog = tog;
    this.setSlideState = this.setSlideState.bind(this);
    this.startCarousel = this.startCarousel.bind(this);
    this.transitionSlides = this.transitionSlides.bind(this);
    this.resetSlideOffScreen = this.resetSlideOffScreen.bind(this);
    this.resetSlideTransitions = this.resetSlideTransitions.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
  }

  componentDidMount() {
    this.startCarousel();
  }

  componentWillUnmount() {
    clearInterval(this.carouselInterval);
  }
  
  startCarousel() {
    //defines interval function to be invoked on mount
    this.carouselInterval = setInterval(() => {
      this.transitionSlides();
    }, 4000);
  };

  setSlideState(slide1, slide2, currentId) {
    //THIS IS THE RE-RENDER
    this.setState({
      slide1: slide1,
      slide2: slide2,
      currentId: currentId
    })
  }

  transitionSlides() {
    //destructure slide objects from state object
    const { slide1, slide2 } = this.state;
    //initialize an ID to play with...
    //why not just alter object state?
      //probably b/c we don't care what the state of currentId is
    let currentId;
    //condition determines onscreen slide then swaps
    if (slide1["position"] === s.onScreen) {
      slide1["position"] = s.offScreenLeft;
      slide2["position"] = s.onScreen;
      currentId = slide2.id;
    } else {
      slide1["position"] = s.onScreen;
      slide2["position"] = s.offScreenLeft;
      currentId = slide1.id;
    }
    //actual rerender
    this.setSlideState(slide1, slide2, currentId);
    //after some time reset State?
    setTimeout(() => {
      this.resetSlideOffScreen();
    }, 3000);
  };

  resetSlideOffScreen() {

    //destructure slides and currentId
    const { slide1, slide2, currentId } = this.state;
    //destructure slides from props...
    const { slides } = this.props;
    //selects offscreen slide
    //sets it's transition to false (Where is this used?)
    //Swaps the slide to the front of the opposite side of screen
    if (slide1["position"] === s.offScreenLeft) {
      slide1["transition"] = false;
      slide1["position"] = s.offScreenRight;
      //can be replaced with modulo?
      slide1["id"] = slide2.id + 1 === slides.length ? 0 : slide2.id + 1;
    } else {
      slide2["transition"] = false;
      slide2["position"] = s.offScreenRight;
      //can be replaced with modulo?
      slide2["id"] = slide1.id + 1 === slides.length ? 0 : slide1.id + 1;
    }
    //sets slide state...rerender
    this.setSlideState(slide1, slide2, currentId);
    //flips transition and rerender after some time..
    this.resetSlideTransitions(slide1, slide2, currentId);
  }

  resetSlideTransitions(slide1, slide2, currentId) {
    //sets timeout before transition becomes true...
    //then rerenders with new state
    setTimeout(() => {
      slide1["transition"] = true;
      slide2["transition"] = true;
      this.setSlideState(slide1, slide2, currentId);
    }, 500)
  }

  togglePlay() {
    // this.tog = true;
    if (this.tog) {
      clearInterval(this.carouselInterval);
      console.log('true')
      this.tog = false;
    } else {
      this.startCarousel();
      console.log('false')
      this.tog = true;
    }
  }

  render() {
    const { slide1, slide2, currentId } = this.state;
    const { slides } = this.props;
  
    return(
      <div 
        className={s.container} 
        // onMouseOver={() => clearInterval(this.carouselInterval)}
        onClick={() => this.togglePlay()}
      >
        <Slide
          image={slides[slide1.id]}
          position={slide1.position}
          transition={slide1.transition ? s.transition : ""}
        />
        <Slide
          image={slides[slide2.id]}
          position={slide2.position}
          transition={slide2.transition ? s.transition : ""}
        />
        
        <Dots slideId={currentId} slides={slides} />
        <PlayPause>Click to Play/Pause</PlayPause>
      </div>
    )
  }

}

export default Slideshow