import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const DropDownTag = styled.div`
  display: flex;
  margin-top: 427px;

  // flex-direction: column;


  height: 365px;
  width: 210px;
  border: 1px solid #bebebe;
`
const Username = styled.div`
  display: flex;
  color: #248bfb;
  font-size: 16px;
  align-items: center;
  border-bottom: 1px solid #bebebe;
  width: 196px;
  height: 70px;
  padding-left: 14px;
  :hover {
  background-image: linear-gradient(to bottom, #f5f5f5, #e8e8e8);  }
`

const DropDown = ({ currentUser }) => {
  // debugger
  return (
    <DropDownTag>
      <ul>
        <Link
          to="/profile"
          style={{ textDecoration: 'none', cursor: 'pointer' }}>
          <Username>{currentUser.username}</Username>
        </Link>
        <li>blank</li>
        <li>blank</li>
        <li>blank</li>
        <li>
          <span>blank</span>
          <span>logout</span>
        </li>
      </ul>
    </DropDownTag>

  )
}

export default DropDown;