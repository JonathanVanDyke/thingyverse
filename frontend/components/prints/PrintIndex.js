import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import PrintIndexItem from './PrintIndexItem'

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px;
`

const ImgWrap = styled.button`
  outline: none;
  padding: 0;
  cursor: pointer;
  border: none;
  height: 125px;
  width: 125px;
  // margin: 10px 0 30px 0;
  :hover {
    opacity: .75;
  }
`

const PrintWrap = styled.div`
  display: grid;
  grid-gap: 43px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, auto);
  // display: flex;
`


export default class PrintIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPrints();
  }

  render() {
    let prints = this.props.prints.map((print, idx) => {
      // debugger
      return(
      <PrintIndexItem 
        key={print.id}
        print={print}
      />
      )
    })

    return (
      <PrintWrap>
        {prints}
      </PrintWrap>
    )
  }

}
