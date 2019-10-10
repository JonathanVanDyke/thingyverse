import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import DropDown from './DropDown'
import DropDownContainer from './DropDownContainer';

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
  outline: none;
  align-items: flex-end;
  position: absolute;
  margin-left: 842px;
`

const NavButtonDrop = styled.button`
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
  position: absolute;
  :focus {
    background-image: linear-gradient(to bottom, white, white);
  }
  outline: none;
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
  justifyContent: center;
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

const DropDownWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: 80px;
  width: 400px;
  z-index: 100;
  position: absolute;
  margin-left: 572px;
  // border: 1px solid skyblue;
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


  //1. MAKE ternary if no currentUser.avatar to use below source instea
  const personalizedButton = () => {
    // destructure array... first value is default state, second value is setState uninvoked function
    const [shouldShowDropdownMenu, setShouldShowDropdownMenu] = useState(false)

    
    let toggle = !shouldShowDropdownMenu;
    const dropdown = () => {
      setShouldShowDropdownMenu(toggle)
    }
    
    let defaultImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmusEZgxQkwLCxi-jH4OBNL3PyoKqHassq3SXlbsOR1M1Q13Tq'
    return(
      <DropDownWrap onBlur={() => setTimeout(() => setShouldShowDropdownMenu(false), 350)}>
        <NavButtonDrop 
          tabIndex={0} 
          onClick={() => dropdown()}
          
          // onBlur={() => setTimeout(() => setShouldShowDropdownMenu(false), 350)}
        >
            <Selectp>
                <Avatar src={!!currentUser.avatar ?
                  currentUser.avatar : 
                  defaultImg }></Avatar>
              <You>You</You>
            </Selectp>
        </NavButtonDrop >
        <div>
          {
            shouldShowDropdownMenu ? <DropDownContainer currentUser={currentUser}/> : null
          }
        </div>
      </DropDownWrap>
    )
    
  }
    
  return !!currentUser ? personalizedButton() : Button()
}

export default SignInJoin;