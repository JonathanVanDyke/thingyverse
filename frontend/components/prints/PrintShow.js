import React from 'react'
import styled from 'styled-components';

const PrintShowPage = styled.div`
  // background-color: black;
  width: 100%;
  height: 100%;
  z-index: 10000;
  position: relative;
`

const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 627px;
  height: 471px;
  overflow: hidden;
`

const IMG = styled.img`
  width: 100%;
  // height: 100%;
`

class PrintShow extends React.Component {
  componentDidMount() {
    let printId = this.props.match.params.printId
    this.props.fetchPrint(Number(printId));
    // debugger
  }

  render() {
    this.props.print.authors
    // debugger
    return (
      <PrintShowPage>
        {this.props.print.title}
        <ImageWrap>
          <IMG src={this.props.print.photoUrl}/>
        </ImageWrap>
      </PrintShowPage>
    )
  }
};

export default PrintShow;