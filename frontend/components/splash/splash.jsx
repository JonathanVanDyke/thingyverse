import React from 'react';
import { Link } from 'react-router-dom';

const Splash = ({ currentUser, logout }) => {
  debugger
  if (currentUser) {
    return (
      <div>
        <h4>Welcome back, {currentUser.username}</h4>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  } else {
    return(
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up!</Link>
      </nav>
    );
  };
};


export default Splash;
