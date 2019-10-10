import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import LikedByAvatars from './LikedByAvatars';

const PrintShowPage = styled.div`
  display: flex;
  flex-direction: column;
  // background-color: black;
  width: 100%;
  height: 100%;
  // z-index: 10000;
  position: relative;
`

//Header
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
`

const Sub = styled.li`
  text-transform: lowercase;
  color: #666;
  font-family: Helvetica, sans-serif;
  font-size: 16px;
  margin-left: 6px;
`

//Section 1
const Section1 = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%
  height: 475px;
  // background-color: green;
`

//LP1
const LeftPane1 = styled.div`
  width: 627px;
`
const Label = styled.h1`
  font-size: 18px;
  border-bottom: 1px solid #bebebe;
  font-family: "AntennaMedium",Helvetica,Arial,sans-serif;
  margin: 0px 0 20px;
  padding: 0 0 8px 0;
  font-family: Helvetica, sans-serif;
`

//RP1
const RightPane1 = styled.div`
  width: 296px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 600px;
  // 
  
`

const ButtonWrap = styled.div`

`

const Heart = styled.button`
  // padding-right: 62px;
  // padding-top: 10px;
  // padding-bottom: 10px;
  background: white;
  border-bottom: 1px solid #bebebe;
  cursor: pointer;
  font-size: 16px;
  outline: none;
  padding: 0;
`

const Heartalign = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 50px;
  color: #666666;
`

const LikeCount = styled.p`
  position: absolute;
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-size: 16px;
  font-family: Helvetica,sans-serif;
`

const Count = styled.span`
  margin-left: 172px;
  font-size: 20px;
  color: #666666
`

//Section 2
const Section2 = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%
`

const LeftPane2 = styled.div`
  margin-top: 20px;
  height: 240px;
  width: 300px;
  // background-color: blue;
`
const RightPane2 = styled.div`
  margin-top: 20px;
  height: 240px;
  width: 635px;
  font-family: Helvetica, sans-serif;
  // background-color: blue;
`

//Image
const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 627px;
  height: 471px;
  overflow: hidden;
`

const IMG = styled.img`
  width: 100%;
  // height: 100%;
`

//Avatar
const Avatar = styled.img`
  border-radius: 50%;
  height: 55px;
  width: 55px;
  border: 1px solid white;
  // padding: 4px 45px 3px 45px;
`



class PrintShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: this.props.likes};
    this.author = null;
    this.like = this.like.bind(this);
    this.unLike = this.unLike.bind(this);
    this.toggle = false;
  }

  // componentDidMount() {
  //   let printId = this.props.match.params.printId

  //   this.props.fetchPrint(Number(printId)).then(()=> {
  //     this.props.fetchUser(this.props.print.author)
  //   }).then(() => {
  //     // this.props.print.user_likes.map
  //   })

  //   this.props.fetchLikes();
    
  // }

  async getData() {
    let printId = this.props.match.params.printId

    await this.props.fetchPrint(Number(printId));
    await this.props.fetchUser(this.props.print.author);
    await this.props.fetchLikes();
    
  }
  componentDidMount() {
    this.getData();
  }

  // componentDidUpdate() {
  //   this.avatargen();
  // }


  like() {
    this.props.createLike(this.props.print.id)
  }

  unLike() {
    let val = this.state.counter;
    // let current_user_id = this.props.current_user_id;
    let pickedLike = this.props.likes.find((like) => {
      return like.user_id === this.props.current_user_id && like.print_id === this.props.print.id
    })

    // debugger
    this.props.deleteLike(pickedLike)
  }

  avatargen() {
    let liked_avatars = this.props.print.user_like_profs.map((user) => {
      return (
        <LikedByAvatars
          user={user}
        />
      )
    })
    return liked_avatars;
  }


  render() {
    let defaultImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmusEZgxQkwLCxi-jH4OBNL3PyoKqHassq3SXlbsOR1M1Q13Tq'
    let current_user_id = this.props.current_user_id;
    let checkId = (pojo) => {
      // debugger
      return pojo === current_user_id;
    }

    let author = this.props.users[this.props.print.author] || {username: '', avatar: null};
    // debugger
    // let liked_avatars = this.props.print.user_like_profs.map((user) => {
    //   return(
    //     <LikedByAvatars
    //       user={user}
    //     />
    //   )
    // })
  

    return (
      <PrintShowPage>

        <Header>

          <Avatar 
            src={
              !!author.avatar ? 
              author.avatar : 
              defaultImg
            } 
          />

          <PrintInfo>
            <ul>
              <Title>{this.props.print.title}</Title> 
              <Sub>By: {' '}
                <Link
                  to={`/profile/${author.id}`}
                >
                  {author.username}
                </Link>
              </Sub> 
            </ul>
          </PrintInfo>

        </Header>

        <Section1>

          <LeftPane1>
            <ImageWrap>
              <IMG src={this.props.print.photoUrl} />
            </ImageWrap>
          </LeftPane1>

          <RightPane1>
            <ButtonWrap>
              { this.props.print.author === this.props.current_user_id ?
                <EditButton print={this.props.print} /> : 
                null
              }
            </ButtonWrap>
            
            <ButtonWrap>
              {!!this.props.print.user_likes.find(checkId) || this.toggle ?

                <Heart onClick={() => this.unLike()}>
                  <Heartalign>

                    <div className='one'>
                      <i className="fas fa-heart"></i>
                    </div>

                    <LikeCount>Like <Count>{this.props.likes ? this.props.likes.length : 0}</Count></LikeCount>
                  </Heartalign>
                </Heart> 
                
                :
                
                <Heart onClick={() => this.like()}>
                  <Heartalign>

                    <div className='two'>
                    <i className="fas fa-heart"></i>
                    </div>

                    <LikeCount>Like <Count>{this.props.likes ? this.props.likes.length : 0}</Count></LikeCount>
                  </Heartalign>
                </Heart>
              }
            </ButtonWrap>

        

            
          </RightPane1>
        </Section1>

        <Section2>

          <LeftPane2>

            <Label>Liked By</Label>
            <ul>
              {/* {liked_avatars} */}
              {this.avatargen()}
            </ul>

          </LeftPane2>

          <RightPane2>

            <Label>Summary</Label>
            {this.props.print.text}
          </RightPane2>

        </Section2>

        


      </PrintShowPage>
    )
  }
};

export default PrintShow;