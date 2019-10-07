import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

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
    // this.unLike = this.unLike.bind(this);
  }

  componentDidMount() {
    let printId = this.props.match.params.printId

    // this.props.fetchPrints();

    this.props.fetchPrint(Number(printId)).then(()=> {
      this.props.fetchUser(this.props.print.author)
    })

    this.props.fetchLikes().then(() => {
      // debugger
      this.props.likes.forEach((like) => {
        // debugger
        this.props.fetchUser(like.user_id)
      })
    })
  }


  like() {
    let val = this.state.counter;
    // debugger
    this.props.createLike(this.props.print.id).then((arg) => {
      let printId = this.props.match.params.printId
      this.props.fetchPrints();
      this.props.fetchPrint(Number(printId));
      // this.setState({ counter: val })
      // debugger
    })
  }

  // unLike() {
  //   let val = this.state.counter;
  //   debugger
  //   this.props.deleteLike(this.props.print).then(() => {
  //     // debugger
  //     // let printId = this.props.match.params.printId
  //     // this.props.fetchPrints();
  //     // this.props.fetchPrint(Number(printId));
  //     // this.setState({ counter: val - 1 })
  //   })
  // }

  // getUserLikes () {
  //   // debugger
  //   this.props.fetchLikes()
  // }

  render() {
    let defaultImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmusEZgxQkwLCxi-jH4OBNL3PyoKqHassq3SXlbsOR1M1Q13Tq'
    let current_user_id = this.props.current_user_id;
    let checkId = (pojo) => {
      // debugger
      return pojo === current_user_id;
    }

    let author = this.props.users[this.props.print.author] || {username: '', avatar: null};
 
    // debugger

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
              <li>{this.props.print.title}</li> 
              <li>By: 
                <Link
                  to={`/profile/${this.props.print.author.id}`}
                >
                  {author.username}
                </Link>
              </li> 
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
              {!!this.props.print.user_likes.find(checkId) ?

                <Heart onClick={() => this.unLike()}>
                  <Heartalign>
                    <p>
                    <div>
                    <p>
                      <i className="fas fa-heart"></i>
                    </p>
                    </div>
                    </p>
                    <LikeCount>Like <Count>{this.props.likes ? this.props.likes.length : 0}</Count></LikeCount>
                  </Heartalign>
                </Heart> 
                
                :
                
                <Heart onClick={() => this.like()}>
                  <Heartalign>
                    <p>
                    <div>
                    <i className="fas fa-heart"></i>
                    </div>
                    </p>
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
              {/* {} */}
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