import React from 'react';
import styled from 'styled-components'
// import {Animated, Text, View} from 'react-native';

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const ImgWrap = styled.div`
  height: 80px;
  width: 80px;
`

// const fallPerspective = keyframes`
//   100% { transform: translateZ(0px) translateY(0px) rotateX(0deg); opacity: 1; }
// `

class FeedCard extends React.Component {
  constructor(props) {
    super(props);
    // this.animation = new Animated.Value(0);
  }

  componentDidMount() {
    //? Test
    // Animated.loop(
    //   Animated.timing(this.animation, {toValue: 1, duration: 2000})
    // ).start();
    //?

    return this.props.fetchPrints();
  }

  render() {
    let prints = this.props.prints.map((print, idx) => {
      return(
      <ImgWrap key={idx}>
        <Img 
          src={print.photoUrl}
        />
      </ImgWrap>
      )
    })

    // const rotation = this.animation.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: ['0deg', '360deg']
    // });
    return (
      // <Animated.View
      //   style={{ transform: [{ rotate: rotation }] }}
      // >
      <div>
        {prints}
      </div>
    // </Animated.View>
    )
  }

}

export default FeedCard;