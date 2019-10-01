import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav({
  background: 'grey',
  height: 400,
  width: 100
});

const Splash = ({ currentUser, logout }) => {
  // debugger
  if (currentUser) {
    return (
      <div>
        <h4>Welcome back, {currentUser.username}</h4>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  } else {
    return(
      <NavBar>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up!</Link>
      </NavBar>
    );
  };
};


export default Splash;
