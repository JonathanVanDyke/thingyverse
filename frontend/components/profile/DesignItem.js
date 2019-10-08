import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


//Card
const Top = styled.div`
  display: flex;
  flex-direction: column;
  height: 262px;
  width: 295px;
`
//Head
const Head = styled.div`
  display: flex;
`

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  z-index: 10;
  position: absolute;
  color: white;
  margin-left: 60px;
  margin-top: 10px;
`

const Byline = styled.h4`
  z-index: 10;
  position: absolute;
  color: white;
  margin-left: 60px;
  margin-top: 32px;
  font-size: 14px;
`

const Avatar = styled.img`
  margin: 4px;
  z-index: 10;
  position: absolute;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  border: 2px solid white;
`
//FOOTER

const Likes = styled.h3`
  z-index: 101;
  position: absolute;
  color: #666666;
  font-size: 18px;
  /* padding: 13px 51px; */
  margin-left: 54px;
`

const LikeButton = styled.div`
  z-index: 100;
  cursor: pointer;
  // padding: 17px 78px 17px 0px;
  background: none;
`


//BACKGROUND
const Fade = styled.div`
  position: absolute;
  height: 55px;
  width: 295px;
  background-color: black;
  -webkit-mask-image: linear-gradient(to bottom,rgba(0,0,0,1),rgba(0,0,0,0));
  -webkit-mask-size: 100% 102%;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: left top, left bottom;
`

const Ribbon = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  height: 45px;
  width: 293px;
  margin-top: 218px;
  background-color: #fff;
  border: 1px solid #ececec;
  border-radius: 3px;
`

const Back = styled.img`
  height: 262px;
  width: 295px;
`

class DesignItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      counter: this.props.likes,
      bool: true
    }
    this.like = this.like.bind(this);
    this.unLike = this.unLike.bind(this);
    // debugger
  }


  like() {
    this.props.createLike(this.props.print.id)
  }

  // like() {
  //     // debugger
  //     let val = this.state.counter;
  //     let bool = this.state.bool;
  //     this.props.createLike(this.props.print).then((arg) => {
  //       // debugger
  //       let printId = this.props.print.id
  //       // this.props.fetchPrints();
  //       this.props.fetchPrint(Number(printId));
  //       this.setState({ counter: val + 1, bool: !bool })
  //       this.props.toggle()
  //       // this.forceUpdate();
  //   })
  // }

  unLike() {
      let val = this.state.counter;
      let bool = this.state.bool;

      let pickedLike = this.props.likes.find((like) => {
        return like.user_id === this.props.currentUser.id && like.print_id === this.props.print.id
      })

      // debugger
      this.props.deleteLike(pickedLike).then(() => {
        // debugger
        let printId = this.props.print.id
        // this.props.fetchPrints();
        this.props.fetchPrint(Number(printId));
        this.setState({ counter: val - 1, bool: !bool  })
        this.props.toggle()
        // this.forceUpdate();
    })
  }

  componentDidMount() {
    // debugger
    this.props.fetchLikes()
    this.props.fetchPrint(this.props.printId)
    // debugger
    this.props.receiveUser(this.props.userId)
  }


  render() {
    // debugger
    let defaultImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmusEZgxQkwLCxi-jH4OBNL3PyoKqHassq3SXlbsOR1M1Q13Tq'
    let currentUser = this.props.currentUser;
    const checkId = (pojo) => {
      return pojo === currentUser.id;
    }
    // debugger
    return(
      <Top>
        <Link to={`/print/${this.props.printId}`}>

          <Head>

            <Avatar src={!!this.props.viewUser ?
              this.props.viewUser.avatar :
              defaultImg}></Avatar>

            <TitleWrap>

              <Title>{this.props.print ? this.props.print.title : ''}</Title>
              <Byline>By: {!!this.props.viewUser ?
                this.props.viewUser.username :
                ''}</Byline>

            </TitleWrap>

          </Head>

    

          <Fade/>

          

          <Back src={this.props.print ? this.props.print.photoUrl : ''}/>
        </Link>
        <Ribbon>
          { !!this.props.print.user_likes.find(checkId) ?
            <LikeButton >
              <p>
                <i onClick={() => this.unLike()} className="fas fa-heart"></i> 
              </p> 
            </LikeButton>
          :
            <LikeButton >
              <i onClick={() => this.like()} className="fas fa-heart"></i>
            </LikeButton>
          }
          <Likes>{this.props.print.user_likes.length}</Likes>
        </Ribbon>
      </Top>
    )
  }
};

export default DesignItem