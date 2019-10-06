import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer = styled.div`
  position: absolute;
  height: 262px;
  width: 295px;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
`




const Background = styled.img`
  height: 100%;
  width: 100%;
  background-size: contain;
`

const BckgrndWrap = styled.div`
  position: relative;
`

//Card
const Top = styled.div`
  display: flex;
  flex-direction: column;
  height: 262px;
  width: 295px;
`
//Head
const Head = styled.div`
  display: flex;
`

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  z-index: 10;
  position: absolute;
  color: white;
  margin-left: 60px;
  margin-top: 10px;
`

const Byline = styled.h4`
  z-index: 10;
  position: absolute;
  color: white;
  margin-left: 60px;
  margin-top: 32px;
  font-size: 14px;
`

const Avatar = styled.img`
  margin: 4px;
  z-index: 10;
  position: absolute;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  border: 2px solid white;
`

const Fade = styled.div`
  position: absolute;
  height: 55px;
  width: 295px;
  background-color: black;
  -webkit-mask-image: linear-gradient(to bottom,rgba(0,0,0,1),rgba(0,0,0,0));
  -webkit-mask-size: 100% 102%;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: left top, left bottom;
`

const Back = styled.img`
  height: 262px;
  width: 295px;
`

const DesignItem = ({ print, viewUser }) => {
  // debugger
  return(
    <Top>

      <Head>
        <Avatar src={!!viewUser.avatar ?
          viewUser.avatar :
          defaultImg}></Avatar>
        <TitleWrap>
          <Title>{print.title}</Title>
          <Byline>By: {viewUser.username}</Byline>
        </TitleWrap>
      </Head>

      <Fade/>
      <Back
        src={print.photoUrl}
      >
      </Back>
    </Top>
    // <CardContainer>
    //   <Card>
    //     <Fade />
    //     <Title>{print.title}</Title>
    //     < BckgrndWrap >
    //       <Background
    //         src={print.photoUrl}
    //       />
    //     </BckgrndWrap>

    //   </Card>

    // </CardContainer>
    
  )
};

export default DesignItem