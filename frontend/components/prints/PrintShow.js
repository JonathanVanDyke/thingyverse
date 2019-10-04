import React from 'react'
import styled from 'styled-components';

const PrintShowPage = styled.div`
  // background-color: black;
  width: 100%;
  height: 100%;
  z-index: 10000;
  position: relative;
`

class PrintShow extends React.Component {
  componentDidMount() {
    let printId = this.props.match.params.printId
    this.props.fetchPrint(Number(printId));
    // debugger
  }

  render() {
    // debugger
    return (
      <PrintShowPage>
        {this.props.print.title}
        <img src={this.props.print.photoUrl}/>
      </PrintShowPage>
    )
  }
};

export default PrintShow;