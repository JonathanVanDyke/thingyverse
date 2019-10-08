import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Avatar = styled.img`
  border-radius: 50%;
  height: 55px;
  width: 55px;
  border: 1px solid white;
  // padding: 4px 45px 3px 45px;
`

const LikedByAvatars = ({user}) => {
  // debugger
  return(
    <li
      key={user.id}
    >
      <Link to={`/profile/${user.id}`}>
        <Avatar
          src={
            !!user.avatar ?
              user.avatar :
              defaultImg
          }
        />
        {/* {this.props.likes ? this.props.likes.length : 0} */}
      </Link>
    </li>
  )
}

export default LikedByAvatars;