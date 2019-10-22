import React from 'react';
// will link to EditProfileForm (front end route)
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import DesignsContainer from './DesignsContainer';

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

//LEFT
const LeftPane = styled.div`
  width: 296px;
  height: 100%;
  // background-color: blue;
  // padding: 10px;
`

//ButtonNav
const BlockNav = styled.section`
  display: grid;
  grid-gap: 43px;
  grid-template-columns: repeat(2,1fr);
  grid-auto-rows: minmax(100px,auto);
  background-color: green;
`

const Blocks = styled.div`
  height: 120px;
  width: 120px;
  background-color: black;
`

// RIGHT
const RightPane = styled.div`
  display: flex;
  flex-direction: column;
  width: 634px;
  height: 100%;
  // background-color: green;
  // padding: 10px;
`

const DesignGrid = styled.div`
  display: grid;
  grid-gap: 43px;
  grid-template-columns: repeat(2,1fr);
  grid-auto-rows: minmax(100px,auto);
`

//AVATAR

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
  border: 6px solid white;
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

//BIO

const BioBox = styled.div`
  height: 144px;
`

const Bio = styled.p`
  height: 100px;
  width: 634px;
  border: none;
  background: white;
  padding: 12px;
`

const BioHeader = styled.div`
  text-transform: uppercase;
`

const ProfileNav = styled.nav`
  display: flex;
  justify-content: flex-start;
  height: 40px;
`

const About = styled.h1`
  text-transform: uppercase;
  color: #666666;
  text-decoration: none;
  font-family: "Antenna",Helvetica,Arial,sans-serif;
  font-weight: normal;
  :hover {
    color: #2b8bfb;
  }
  margin: 10px;
  margin-left: 0px;
  margin-right: 20px;
  font-weight: bold;
`

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.viewUser = { username: '', avatar: '', id: null, bio: '' }
    this.state = {select: 1}
  }

  componentDidMount() {
    // debugger
    let userId = this.props.match.params.userId
    this.props.receiveUser(Number(userId))
    this.props.fetchCollections()
  }

  render() {
    let defaultImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmusEZgxQkwLCxi-jH4OBNL3PyoKqHassq3SXlbsOR1M1Q13Tq'
    this.viewUser = this.props.viewUser || this.viewUser
    // debugger
    
    let designs = this.viewUser.designs.map((print) => {
      // debugger
      return (
        <DesignsContainer
          key={print.id}
          print={print}
          match={this.props.match}
        >
        </DesignsContainer>
      )
    })

    // debugger
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
              { this.viewUser.id === this.props.currentUser.id ? <EditButton>edit profile</EditButton> : null }
            </EditButtonBox>
          </AvatarCage>

          <BlockNav>
            
          </BlockNav>

        </LeftPane>

        <RightPane>
          <ProfileNav>
            <Link 
              to={`/profile/${this.viewUser.id}`}
              style={{ textDecoration: 'none' }}
              >
              <About
                onClick={() => this.setState({select: 1})}
              >
            ABOUT
              </About>
            </Link>
            <Link 
              to={`/profile/${this.viewUser.id}/prints`}
              style={{ textDecoration: 'none' }}
            >
              <About
                onClick={() => this.setState({ select: 2 })}
              >
                DESIGNS
              </About>
            </Link>
            <Link
              to={`/profile/${this.viewUser.id}/collections`}
              style={{ textDecoration: 'none' }}
            >
              <About
                onClick={() => this.setState({ select: 2 })}
              >
                COLLECTIONS
              </About>
            </Link>
          </ProfileNav>
          { 
            this.state.select === 1 ? 
            <BioBox>
              <BioHeader>about you</BioHeader>
              <Bio>
                {!!this.viewUser.bio ? this.viewUser.bio : ''}
              </Bio>
            </BioBox> :
            null
          }
          { 
            this.state.select === 2 ? 
              <DesignGrid>
                {designs}
              </DesignGrid>
             :
            null
          }

        </RightPane>

      </ProfilePage>
    )
  }
}

export default Profile