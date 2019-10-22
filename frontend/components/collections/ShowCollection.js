import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DesignsContainer from './../profile/DesignsContainer'
import ShowCollectionItemContainer from './ShowCollectionItemContainer';
import PrintCards from './../cards/PrintCard/PrintCards';

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
  margin-bottom: 100px;
`

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
  grid-template-columns: repeat(3,1fr);
  grid-auto-rows: minmax(100px,auto);
`
const Header = styled.header`
  display: flex;
  align-items: center;
  height: 105px;
`

const PrintInfo = styled.div`
  display: flex;
  flex-direction: columns;
  margin-bottom: 20px;
`

const Title = styled.li`
  font-size: 30px;
  margin: 5px;
  color: #666;
  font-family: "Helvetica",Helvetica,Arial,sans-serif;
`

const Sub = styled.li`
  text-transform: lowercase;
  color: #666;
  font-family: Helvetica, sans-serif;
  font-size: 16px;
  margin-left: 6px;
`

const Avatar = styled.img`
  border-radius: 50%;
  height: 55px;
  width: 55px;
  border: 1px solid white;
  // padding: 4px 45px 3px 45px;
`

class ShowCollection extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    let collectionId = this.props.match.params.collectionId

    this.props.fetchCollection(Number(collectionId)).then(() => {
      this.props.fetchUser(this.props.collection.author_id)
    })

  }

  render() {
    let defaultImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmusEZgxQkwLCxi-jH4OBNL3PyoKqHassq3SXlbsOR1M1Q13Tq'
    // let printIds = [];
    debugger
    // printIds = this.props.collection.print_collects.map((collect) => {
    //   return collect.print_id
    // })

    let author_id = this.props.collection.author;
    // debugger
    let user = this.props.user;
    return (
      <div>
        <Header>
          <Avatar
            src={
              user.avatar ?
              user.avatar :
              defaultImg
            }
          />

          <PrintInfo>
            <ul>
              <Title>{this.props.collection.title}</Title>
              {/* <Sub>By: {' '}
                  <Link
                  to={`/profile/${author_id}`}
                >
                  {user.username}
                </Link>
              </Sub> */}
            </ul>
          </PrintInfo>
        </Header>

        <ProfilePage>
          <RightPane>
            <DesignGrid>
              {<PrintCards
                printIds={this.props.printIds}
              />}
            </DesignGrid>
          </RightPane>

        </ProfilePage>
      </div>
    )
  }
};

export default ShowCollection;