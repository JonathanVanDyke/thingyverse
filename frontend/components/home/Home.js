import React from 'react';
import styled from 'styled-components';

const FirstContent = styled.div`
  height: 341px;
  width: 971px;
  margin-top: 25px;
  background-image: url(https://www.machinedesign.com/sites/machinedesign.com/files/G1-article-version_0.jpg);
  background-position: center;
  background-size: cover;
  position: relative;
`

const Home = () => {
  return(
    <FirstContent></FirstContent>
  )
}

export default Home 