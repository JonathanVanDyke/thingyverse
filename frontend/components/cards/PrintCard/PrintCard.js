import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { withRouter } from 'react-router-dom';


const rand = () => {
  let myArray = [300, 0, -300];
  let rand = myArray[Math.floor(Math.random() * myArray.length)];
  return rand
}

const left = keyframes`
  // 0% { transform: translate3d(${rand()}px, 10px, 10px); }
  // 100% { transform: translate3d(0px, 0px, 0px); }
`

//Card
const Top = styled.div`
  display: flex;
  flex-direction: column;
  height: 262px;
  width: 295px;
  overflow: hidden;
  box-shadow: 8px 14px 18px lightgrey;  
  // animation: ${left} .25s linear 1
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  height: 262px;
  width: 295px;
  overflow: hidden;
  box-shadow: 8px 14px 18px lightgrey;  
  justify-content: center;
  align-items: center;
  background: #6ea734;
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

const RibbonButton = styled.div`
  display: flex;
  align-items: center;
`

const Back = styled.img`
  height: 262px;
  width: 295px;
  object-fit: cover;
`

//Form
const SelectDrop = styled.div`
  height: 262px;
  width: 295px;
  overflow: hidden;
  box-shadow: 8px 14px 18px lightgrey;
  font-family: Helvetica, sans-serif;
`

const FormTitle = styled.h1`
  font-size: 24px;
  padding: 10px;
  color: white;
`

const FormSub = styled.h3`
  font-size: 16px;
  padding: 10px;
  color: white;
`

const Label = styled.label`
  font-size: 16px;
  padding: 10px;
  color: white;
`

const Select = styled.select`
  display: flex;
  width: 250px;
  height: 40px;
  margin-left: 8px;
  outline: none;
  font-size: 15px;
  font-family: Helvetica, sans-serif;
  // margin: auto;
`

const Buttons = styled.div`
  display: flex;
  height: 40px;
  justify-content: flex-start;
  margin: 9px;
  font-family: Helvetica, sans-serif;
`

const FormSave = styled.input`
  width: 74px;
  text-transform: uppercase;
  font-size: 127px;
  box-sizing: content-box;
  font-family: Helvetica, sans-serif;
  background-color: white;
  // font-size: 13px;
`

const FormCancel = styled.button`
  height: 26px;
  width: 94px;
  margin-left: 10px;
  text-transform: uppercase;
  font-family: Helvetica, sans-serif;
  font-size: 13px;
`

const CreateWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const CreateInpt = styled.input`
  width: 180px;
  height: 20px;
  /* align-self: center; */
  margin-left: 10px;
`


class PrintCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectedCollection: this.props.userCollectionTitles[0],
      collectFormShown: false,
      bool: true,
      title: '',
      currentUserId: this.props.currentUserId,
      id: this.props.userCollectedId,
      print_id: this.props.printId,
    }
    this.like = this.like.bind(this);
    this.unLike = this.unLike.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.deletePrintFromCollection = this.deletePrintFromCollection.bind(this);
  }

  like() {
    this.props.createLike(this.props.printId)
  };

  unLike() {
    // debugger
    this.props.deleteLike(this.props.likeId).then(() => {
      let printId = this.props.printId;
      this.props.fetchPrint(printId);
    });
  };

  toggleForm() {
    this.setState({collectFormShown: !this.state.collectFormShown})
  }


  componentDidMount() {
    // debugger
    this.props.fetchPrint(this.props.printId).then(() => {
      this.props.fetchUser(this.props.authorId).then(() => {
        this.props.fetchUser(this.props.currentUser.id).then(() => {
          this.props.fetchLikes();
        })
      })
    })
  }


  // async setupData() {
  //   await this.props.fetchPrint(this.props.printId);
  //   debugger
  //   await this.props.fetchUser(this.props.currentUser.id);
  //   await this.props.fetchUser(this.props.authorId);
  //   debugger
  //   await this.props.fetchLikes();
  //   await this.props.fetchCollections();
  // }

  // componentDidMount() {
  //   this.setupData();
  // }

  update() {
    return e => this.setState({ selectedCollection: e.target.value })
  }

  update2() {
    return e => this.setState({ title: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();

    //maybe conditional for if title value exists or not
    // debugger
    // this.props.updateCollection({
    //   id: this.props.userCollectedId,
    //   print_id: this.props.printId,
    // })
    this.props.updateCollection(this.state)
    this.toggleForm()
  }


  deletePrintFromCollection() {
    // debugger
    // this.props.deleteCollection({
    //   id: this.props.userCollectedId,
    //   print_id: this.props.printId,
    // })
    this.props.deleteCollection(this.state)

  }

  // createSelectItems() {
  //   let items = [];
  //   for (let i = 0; i <= this.props.userCollectionTitles; i++) {
  //     items.push(<option key={i} value={i}>{i}</option>);
  //     //here I will be creating my options dynamically based on
  //     //what props are currently passed to the parent component
  //   }
  //   return items;
  // }

  onDropdownSelected(e) {
    console.log("THE VAL", e.target.value);
    //here you will see the current selected value of the select input
  }


  render() {
    let collections = this.props.collections;
    let defaultImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmusEZgxQkwLCxi-jH4OBNL3PyoKqHassq3SXlbsOR1M1Q13Tq'
    let currentUserId = this.props.currentUserId;
    const checkId = (pojo) => {
      return pojo === currentUserId;
    }

    // { this.state.collectFormShown ? <h1>shown</h1> : <h1>hidden</h1> }
    debugger
    return (
      <>
      {/* {this.props.collectionParent.length} */}
      { !this.state.collectFormShown ?
      <Top>        
 
        <Link to={`/print/${this.props.printId}`}>

          <Head>

            <Avatar src={this.props.author ?
              this.props.author.avatar :
              defaultImg}></Avatar>

            <TitleWrap>

              <Title>{this.props.print ? this.props.print.title : ''}</Title>
              <Byline>
                By: {' '} 
                {
                  this.props.author ?
                  this.props.author.username :
                  ''
                }
                </Byline>

            </TitleWrap>

          </Head>

          <Fade />

          <Back src={this.props.print ? this.props.print.photoUrl : ''} />
        </Link>
        <Ribbon>
          <RibbonButton>
            {
              this.props.likeId ?
              <LikeButton >
                <p>
                    <i onClick={() => this.unLike()} className="fas fa-heart"></i>
                </p>
              </LikeButton>
              :
              <LikeButton>
                <i onClick={() => this.like()} className="fas fa-heart"></i>
              </LikeButton>
            }
            {/* print.user_likes.length */}
            <Likes>{this.props.print.user_likes.length}</Likes>
          </RibbonButton>
          <RibbonButton>
            {
              this.props.collected2 ?
                <>
                  <Link to={this.props.location.pathname}>
                    <LikeButton >
                      <p>
                        {/* Hello */}
                          <i onClick={() => this.deletePrintFromCollection()} className="fas fa-layer-group"></i>
                      </p>
                    </LikeButton>
                  </Link>
                  <Likes>1</Likes>
                </>
                :
                <>
                  <LikeButton>
                    {/* GoodBye */}
                    <i onClick={() => this.toggleForm()} className="fas fa-layer-group"></i>
                  </LikeButton>
                  <Likes>0</Likes>
                </>
            }
            {/* print.user_likes.length */}
              {/* <Likes>{this.props.print.collections_in.length}</Likes> */}
          </RibbonButton>
        </Ribbon>
        }
      </Top> :
        <Form>
          {/* {this.state.collectFormShown ? <h1>shown</h1> : <h1>hidden</h1>} */}
          <form onSubmit={this.handleSubmit}>
            <SelectDrop>
              <FormTitle>Select a Collection</FormTitle>
              <FormSub>or create a new one below:</FormSub>
              {/* <Select
                name="collection"
                onChange={this.update()}
              >
                <option
                  value={this.props.userCollectionTitles}
                  onChange={this.update()}
                >
                  {this.props.userCollectionTitles}
                </option>
                <option
                  value='hmm'
                  onChange={this.update()}
                >
                  hmm
                </option>
              </Select> */}
              <Select 
                  onChange={this.update()}
                  name="country" 
              >
                {this.props.userCollectionTitles.map((e, key) => {
                  return <option onChange={this.update()} key={key} value={e}>{e}</option>;
                })}
              </Select>
              {/* <p>{this.props.userCollectionTitles}</p> */}
              <Buttons>
                  <FormSave type='submit' value='Save'></FormSave>
                  <FormCancel onClick={() => this.toggleForm()}>Cancel</FormCancel>
              </Buttons>
              <CreateWrap >
                <Label>Create Collection </Label>
                <CreateInpt
                  type='text'
                  value={this.state.title}
                  onChange={this.update2()}
                />
                
              </CreateWrap>
            </SelectDrop>
          </form>


        </Form>
      }
      </>
    )
  }
};

PrintCard.defaultProps = {
  print: {
    title: '',
    photoUrl: '',
    user_likes: [],
    print_collects: [],
  }
}

PrintCard.propTypes = {
  createLike: PropTypes.func,
  deleteLike: PropTypes.func,
  fetchPrint: PropTypes.func,
  fetchUser: PropTypes.func,
  author: PropTypes.object,
  authorId: PropTypes.number,
  print: PropTypes.object,
  likeId: PropTypes.number,
}

export default withRouter(PrintCard)