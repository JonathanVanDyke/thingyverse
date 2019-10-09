import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import PrintIndexItem from './PrintIndexItem'


const PrintWrap = styled.div`
  display: grid;
  grid-gap: 32px
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
    // debugger
  }

  render() {
    // debugger
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
