import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const NavButton = styled.button`
  font-size: 15px;
  font-family: "Antenna", Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  margin: 0;

  background-image: linear-gradient(to bottom, #f5f5f5, #e8e8e8);
  :hover {
    background-image: linear-gradient(to bottom, white, white);
  }
  cursor: pointer;
  padding-right: 0;
  padding-left: 0;
    //   border-left: 1px solid #fff;
    // border-right: 1px solid #fff;
`

const Select = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  color: '#666',
  padding: '20px 12px 20px',
})


const SignInJoin = ({ currentUser, logout }) => {
  return (
    <NavButton>
      <Link
        to="/login"
        style={{ textDecoration: 'none', cursor: 'pointer' }}>
        <Select>sign in / join</Select>
      </Link>
    </NavButton>
  )
}

export default SignInJoin;