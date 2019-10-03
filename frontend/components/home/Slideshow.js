import React from 'react';
import Slide from './Slide';
import Dots from './Dots';

//this container directly references the stylesheet ?

const s = {
  container: "fullW fullH rel overflowH",
  onScreen: "left0",
  offScreenRight: "left100vw",
  offScreenLeft: 'leftM100vw',
  transition: "transition1l"
};

// const Container = styled.div`
//   width: 100%;
//   height: 100%;
//   position: relative;
//   overflow: hidden;
// `

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
    this.setSlideState = this.setSlideState.bind(this);
    this.startCarousel = this.startCarousel.bind(this);
    this.transitionSlides = this.transitionSlides.bind(this);
    this.resetSlideOffScreen = this.resetSlideOffScreen.bind(this);
    this.resetSlideTransitions = this.resetSlideTransitions.bind(this);
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
    //currentID is always = to slide2's id
    if (slide1["position"] === s.onScreen) {
      slide1["position"] = s.offScreenLeft;
      slide2["position"] = s.onScreen;
      currentId = slide2.id;
    } else {
      slide1["position"] = s.onScreen;
      slide2["position"] = s.offScreenLeft;
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

  render() {
    const { slide1, slide2, currentId } = this.state;
    const { slides } = this.props;
  
    return(
      <div className={s.container}>
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
      </div>
    )
  }

}

export default Slideshow