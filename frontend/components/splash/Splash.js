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
        <Link
          to='/create'
        >
          create
        </Link>
        {/* <button onClick={logout}>Log Out</button> */}
        <SignInJoinButton currentUser={currentUser}/>
      </NavBar>
    );
  } else {
    return(
      <NavBar>
        <Link 
          to="/" 
          className="header-link"
          style={{ textDecoration: 'none' }}
        >
          <Logo>Thingyverse</Logo>
        </Link>
        <Link
          to='/'
        >
          create
        </Link>
        <SignInJoinButton currentUser={currentUser}/>
      </NavBar>
    );
  };
};


export default Splash;
