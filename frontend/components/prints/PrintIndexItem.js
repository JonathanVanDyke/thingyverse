import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


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

const PrintIndexItem = ({ print }) => {
  return (
    <ImgWrap>
        <Link to={`/print/${print.id}`}>
        <Img src={print.photoUrl}/>
      </Link>
    </ImgWrap>
  )
}

export default PrintIndexItem;