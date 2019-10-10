import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const morph = keyframes`
  0% { border-radius: 5px; }
  50% { border-radius: 50%; }
  100% { border-radius: 5px; }
`

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const rock = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(1deg); }
  75% { transform: rotate(-1deg); }
  100% { transform: rotate(0deg); }
`

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px;
  // :hover{
  //   animation: ${morph} 1s linear 1, ${spin} 1s ease-in-out 1;
  // }
  :hover{
    animation: ${rock} .2s ease-out 2;
  }
`



const ImgWrap = styled.button`
  outline: none;
  padding: 0;
  cursor: pointer;
  border: none;
  height: 125px;
  width: 125px;
  // margin: 10px 0 30px 0;
  // :hover {
  //   opacity: .75;
  // }
  margin-bottom: 0;
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