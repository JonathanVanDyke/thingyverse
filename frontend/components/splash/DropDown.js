import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import EditProfileButton from './EditProfileButton'
import SignOutButton from './SignOutButton'

const DropDownTag = styled.div`
  display: flex;
  // margin-top: 427px;
  margin-top: 167px;

  // flex-direction: column;


  // height: 365px;
  height: 105px;
  width: 210px;
  border: 1px solid #bebebe;
  background-color: #fff;
  height: ${props => props.height}
`
const Username = styled.li`
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

  text-transform: capitalize;
`
const Dummy1 = styled.li`
  display: flex;
  color: #666;
  font-size: 14px;
  align-items: center;
  border-bottom: 1px solid #bebebe;
  width: 196px;
  height: 44px;
  padding-left: 14px;
  // :hover {
  // background-image: linear-gradient(to bottom, #f5f5f5, #e8e8e8);  }
`
const Dummy2 = styled.li`
  display: flex;
  color: #666;
  font-size: 14px;
  align-items: center;
  // border-bottom: 1px solid #bebebe;
  width: 196px;
  height: 43px;
  padding-left: 14px;
  // :hover {
  // background-image: linear-gradient(to bottom, #f5f5f5, #e8e8e8);  }
`

const Dummy3 = styled.li`
  display: flex;
  color: #666;
  font-size: 14px;
  align-items: center;
  border-bottom: 1px solid #bebebe;
  width: 196px;
  height: 42px;
  padding-left: 14px;
  // :hover {
  // background-image: linear-gradient(to bottom, #f5f5f5, #e8e8e8);  }
`

const Split = styled.li`
  display: flex;
  color: #666;
  font-size: 14px;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid #bebebe;
  width: 196px;
  height: 34px;
  padding-left: 14px;
  // :hover {
  // background-image: linear-gradient(to bottom, #f5f5f5, #e8e8e8);  }
`


const SplitItems = styled.span`
    border-right: 1px solid #bebebe;
`

const DropDown = ({ currentUser, logout }) => {
  // debugger
  let toggle = true;
  return (
    <DropDownTag>
      <ul>
        <Link
          to="/profile"
          style={{ textDecoration: 'none', cursor: 'pointer' }}
        >
          <Username>{currentUser.username}</Username>
        </Link>

        <Split>
          <EditProfileButton />
          <Link
            to="/"
            style={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            <SignOutButton logout={logout}/>
          </Link>
        </Split>
      </ul>
    </DropDownTag>

  )
}

export default DropDown;