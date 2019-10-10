import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  color: #666;
  font-size: 12px;
  // align-items: center;
  border: none;
  border-left: 1px solid #bebebe;
  width: 108px;
  height: 34px;
  // padding-left: 14px;
  :hover {
  background-image: linear-gradient(to bottom, #f5f5f5, #e8e8e8);  }

  text-transform: capitalize;
  justify-content: center;
  margin-right: -11px;
  
`

const SignOutButton = ({ logout }) => {
  // debugger
  return (
    <div>
      <Button onClick={logout}>Sign Out</Button>
    </div>
  )
}

export default SignOutButton;