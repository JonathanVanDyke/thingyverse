import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import styled, { keyframes } from 'styled-components';


//Card
const Top = styled.div`
  display: flex;
  flex-direction: column;
  height: 262px;
  width: 295px;
  border-radius: 30px;
  box-shadow: 8px 14px 18px lightgrey;
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
  z-index: 5;
  position: absolute;
  color: white;
  margin-left: 60px;
  margin-top: 10px;
`

const Byline = styled.h4`
  z-index: 5;
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
  border-radius: 30px;
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
  object-fit: cover;
  border-radius: 30px;
`

//MINI Styling!!
const morph = keyframes`
  0% { border-radius: 5px; }
  50% { border-radius: 50%; }
  100% { border-radius: 5px; }
`

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const rock = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(1deg); }
  75% { transform: rotate(-1deg); }
  100% { transform: rotate(0deg); }
`

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px;
  // :hover{
  //   animation: ${morph} 1s linear 1, ${spin} 1s ease-in-out 1;
  // }
  :hover{
    animation: ${rock} .2s ease-out 2;
  }
  
`

const ImgWrap = styled.button`
  outline: none;
  padding: 0;
  cursor: pointer;
  border: none;
  height: 125px;
  width: 125px;
  // margin: 10px 0 30px 0;
  margin-bottom: 0;
`
//END OF MINI STYLE

class CollectionCard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCollection(this.props.collectionId).then(() => {
      this.props.fetchPrint(this.props.printId).then(() => {
        this.props.fetchUser(this.props.authorId);
      })
    })
  }


  render() {
    let defaultImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmusEZgxQkwLCxi-jH4OBNL3PyoKqHassq3SXlbsOR1M1Q13Tq'
    let currentUserId = this.props.currentUserId;

    return (
      <>
        {!this.props.mini ? 
        <Top>
          <Link to={`/collection/${this.props.collectionId}`}>

            <Head>

              <Avatar src={this.props.author ?
                this.props.author.avatar :
                defaultImg}></Avatar>

              <TitleWrap>

                <Title>{this.props.collection ? this.props.collection.title : ''}</Title>
                <Byline>
                  By: 
                  {
                    this.props.author ?
                    this.props.author.username :
                    ''
                  }</Byline>

              </TitleWrap>

            </Head>



            <Fade />



            <Back src={this.props.print ? this.props.print.photoUrl : ''} />
          </Link>
        </Top> 
        : 
          <ImgWrap>
            <Link to={`/collection/${this.props.collectionId}`}>
              <Img src={this.props.print ? this.props.print.photoUrl : ''} />
            </Link>
            <p>{this.props.collection.title}</p>
          </ImgWrap>
        }
      </>
    )
  }
};

CollectionCard.defaultProps = {
  print: {
    title: '',
    photoUrl: '',
    user_likes: [],
  },
  collection: {
    title: '',
    author_id: null,
    id: null,
    print_collects: [],
    collect_follows: [],
  }
}

CollectionCard.propTypes = {
  fetchPrint: PropTypes.func,
  fetchUser: PropTypes.func,
  fetchCollection: PropTypes.func,
  collectionId: PropTypes.number,
  collection: PropTypes.object,
  author: PropTypes.object,
  authorId: PropTypes.number,
  printId: PropTypes.number,
  print: PropTypes.object,
  currentUserId: PropTypes.number,
  mini: PropTypes.bool,
}

export default CollectionCard