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

const Selectp = styled.div`
  display: flex;
  justifyContent: space-between;
  alignContent: center;
  color: #666;
  padding: 4px 25px 3px 25px;
`

const You = styled.div`
  text-align: center;
  margin-top: 13px;
  margin-left: 5px;
  text-transform: capitalize;
`

const Avatar = styled.img`
  border-radius: 50%;
  height: 47px;
  width: 47px;
  border: 1px solid white;
  // padding: 4px 45px 3px 45px;
`


const SignInJoin = ({ currentUser }) => {
  // debugger
  const Button = () => (
    <NavButton>
      <Link
        to="/login"
        style={{ textDecoration: 'none', cursor: 'pointer' }}>
        <Select>sign in / join</Select>
      </Link>
    </NavButton>
  )
  const personalizedButton = () => (
    <NavButton>
      <Link
        to="/logged-in"
        style={{ textDecoration: 'none', cursor: 'pointer' }}>
        <Selectp>
          <Avatar src={currentUser.avatar}></Avatar>
          <You>You</You>
        </Selectp>
      </Link>
    </NavButton>
  )
    
  return !!currentUser ? personalizedButton() : Button()
}

export default SignInJoin;