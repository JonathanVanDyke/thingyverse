import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const ImgWrap = styled.div`
  height: 80px;
  width: 80px;
`


export default class FeedCard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
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

    return (
      <div>
        {prints}
      </div>
    )
  }

}
