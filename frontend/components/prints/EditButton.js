import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const InputButton = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 296px;
  height: 38px;
  padding: 0;
  background-color: #666666;
  color: white;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  align-items: center;
  box-shadow: 5px 10px 18px #888888;
  transition: box-shadow 1s;
  :hover {
    box-shadow: 10px 5px 18px #888888;
  }
  margin-bottom: 25px;
`

const Txt = styled.div`
  color: white;
  text-decoration: none;
  padding-top: 9px;
  padding-bottom: 9px;
  padding-right: 102px;
  padding-left: 102px;
`

const EditButton = ({ print }) => {
  return (
    <InputButton>
      <Link
        to={`/edit/${print.id}`}
        style={{ textDecoration: 'none', cursor: 'pointer' }}
      >
        <Txt>Edit Print</Txt>
      </Link>
    </InputButton>
  )
}

export default EditButton;