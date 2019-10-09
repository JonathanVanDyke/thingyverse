import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SignInJoinButton from './SignInJoinButton';

const NavBar = styled.nav({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  // background: '#f1f1f1',
  backgroundImage: 'linear-gradient(to bottom, #f5f5f5, #e8e8e8)',
  // border: '1px solid black',
  borderBottom: '1px solid #bebebe',
  height: 60,
});

const Logo = styled.h1({
  color: '#238bfb',
  fontSize: 25,
  fontWeight: 750,
  fontFamily: '"Antenna", Helvetica, Arial, sans-serif',
});

const Create = styled.h1`
  text-transform: uppercase;
  color: #666666;
  text-decoration: none;
  font-family: "Antenna",Helvetica,Arial,sans-serif;
  font-weight: normal;
  :hover {
    color: #2b8bfb;
  }
  margin: 10px;
`

const SearchDummy = styled.div`
  height: 38px;
  width: 200px;
  background-color: white;
  margin-right: 12px;
  border: 1px solid #d1d1d1;
  // margin-right: -740px;
`

const NavButtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  margin-left: 397px;
`

const Splash = ({ currentUser, logout }) => {
  // debugger
  if (currentUser) {
    return (
      <NavBar>
        <Link 
          to="/" 
          style={{ textDecoration: 'none' }}>
          <Logo>Thingyverse</Logo>
        </Link>
        <NavButtnWrap>
          <Link
            to='/allprints'
            style={{ textDecoration: 'none' }}
          >
            <Create>prints</Create>
          </Link>
          <Link
            to='/allcollections'
            style={{ textDecoration: 'none' }}
          >
            <Create>collections</Create>
          </Link>
          <Link
            to='/create'
            style={{ textDecoration: 'none' }}
          >
            <Create>create</Create>
          </Link>
          {/* <SearchDummy></SearchDummy> */}
        </NavButtnWrap>
          <SignInJoinButton currentUser={currentUser}/>
      </NavBar>
    );
  } else {
    return(
      <NavBar>
        <Link 
          to="/" 
          className="header-link"
        >
          <Logo>Thingyverse</Logo>
        </Link>
        <Link
          to='/'
          style={{ textDecoration: 'none' }}
        >
          <Create>create</Create>
        </Link>
        {/* <SearchDummy></SearchDummy> */}
        <SignInJoinButton currentUser={currentUser}/>
      </NavBar>
    );
  };
};


export default Splash;
