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
  height: 100%;
  // background-color: red;
  // padding: 10px;
  margin-top: 51px;
`

const LeftPane = styled.div`
  width: 296px;
  height: 100%;
  // background-color: blue;
  // padding: 10px;
`

const RightPane = styled.div`
  display: flex;
  flex-direction: column;
  width: 634px;
  height: 100%;
  // background-color: green;
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

const AvatarBox = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  width: 294px;
  height: 200px;
  // background-color: black;
`

const Banner = styled.div`
  position: relative;
  height: 147px;
  width: 294px;
  background-image: url(https://www.machinedesign.com/sites/machinedesign.com/files/G1-article-version_0.jpg);
  background-position: center;
  background-size: cover;
`

const Avatar = styled.img`
  position: absolute;
  border-radius: 50%;
  height: 90px;
  width: 90px;
  border: 1px solid white;
  margin-top: 95px;
`

const UserIcon = styled.img`
  border-radius: 50%;
  height: 20px;
  width: 20px;
`

const Username = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #333333;
  width: 294px;
  height: 80px;
  text-transform: capitalize;
  font-family: "Antenna Bold",Helvetica,Arial,sans-serif;
  font-weight: bolder;
`

const EditButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 294px;
  height: 80px;
  // background-color: pink;
`

const EditButton = styled.button`
  display: flex;
  width: 156px;
  height: 40px;
  background-color: #666;
  color: white;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  justify-content: center;
  :hover {
    background-color: #b3b3b3}
`

const ProfileNav = styled.ul`
    height: 40px;
`

const BioBox = styled.div`
  height: 144px;
`

const Bio = styled.p`
  height: 100px;
  width: 634px;
  border: none;
  background: white;
`

const BioHeader = styled.div`
  text-transform: uppercase;
`

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.viewUser = { username: '', avatar: '', id: null, bio: '' }
  }

  componentDidMount() {
    let userId = this.props.match.params.userId
    this.props.receiveUser(Number(userId))
  }

  render() {
    let defaultImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmusEZgxQkwLCxi-jH4OBNL3PyoKqHassq3SXlbsOR1M1Q13Tq'
    this.viewUser = this.props.viewUser || this.viewUser
    debugger
    return (
      <ProfilePage>
        {/* top */}

        <LeftPane>
          <AvatarCage>
            <AvatarBox>
              <Banner/>
              <Avatar src={!!this.viewUser.avatar ?
                this.viewUser.avatar :
                defaultImg}></Avatar>
            </AvatarBox>
            <Username>
              <UserIcon src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD1JwaLp6rwryZ-mLb8nLkjq-O_KsQRCkeOQK8DcE0AYy0Wmvt'>
              </UserIcon>
              {this.viewUser.username}
            </Username>
            <EditButtonBox>
                <EditButton>edit profile</EditButton>
            </EditButtonBox>
          </AvatarCage>
        </LeftPane>

        <RightPane>
          <ProfileNav>
            <li>ABOUT</li>
          </ProfileNav>
          <BioBox>
            <BioHeader>about you</BioHeader>
            <Bio>
              {!!this.viewUser.bio ? this.viewUser.bio : ''}
            </Bio>
          </BioBox>
        </RightPane>

      </ProfilePage>
    )
  }
}

export default Profile