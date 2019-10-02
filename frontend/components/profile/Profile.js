import React from 'react';
// will link to EditProfileForm (front end route)
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProfilePage = styled.div`
  // margin-top: 100px;
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 970px;
  height: 100vh;
  background-color: red;
  // padding: 10px;
  margin-top: 51px;
`

const LeftPane = styled.div`
  width: 296px;
  height: 100vh;
  background-color: blue;
  // padding: 10px;
`

const RightPane = styled.div`
  width: 634px;
  height: 100vh;
  background-color: green;
  // padding: 10px;
`

const AvatarCage = styled.div`
  display: flex;
  flex-direction: column;
  width: 294px;
  // height: 488px;
  height: 360px;
  background-color: #fff;
  border: 1px solid #e7e7e7;
`

const Avatar = styled.div`
  width: 294px;
  height: 200px;
  background-color: black;
`

const Username = styled.div`
  width: 294px;
  height: 80px;
  background-color: grey;
`

const EditButton = styled.div`
  width: 294px;
  height: 80px;
  background-color: pink;
`

const Profile = ({ currentUser }) => {
  return (
    <ProfilePage>
      {/* top */}
      <LeftPane>
        <AvatarCage>
          <Avatar/>
          <Username/>
          <EditButton/>
        </AvatarCage>
      </LeftPane>
      <RightPane>
        right
      </RightPane>
      {/* <h1>Edit{ currentUser.username }</h1> */}

    </ProfilePage>
  )
}

export default Profile