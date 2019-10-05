import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


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

//Section 1
const Section1 = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%
  height: 475px;
  // background-color: green;
`

const LeftPane1 = styled.div`

`

const RightPane1 = styled.div`

`
//Section 2
const Section2 = styled.section`
  width: 100%
`

const LeftPane2 = styled.div`

`
const RightPane2 = styled.div`

`

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

const InputButton = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 296px;
  height: 38px;
  padding: 0;
  background-color: #666666;
  color: white;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  align-items: center;
  box-shadow: 5px 10px 18px #888888;
  transition: box-shadow 1s;
  :hover {
    box-shadow: 10px 5px 18px #888888;
  }
`

const Txt = styled.div`
  color: white;
  text-decoration: none;
  padding-top: 9px;
  padding-bottom: 9px;
  padding-right: 102px;
  padding-left: 102px;
`

const Avatar = styled.img`
  border-radius: 50%;
  height: 55px;
  width: 55px;
  border: 1px solid white;
  // padding: 4px 45px 3px 45px;
`

const PrintInfo = styled.div`
  display: flex;
  flex-direction: columns;
`

class PrintShow extends React.Component {
  componentDidMount() {
    let printId = this.props.match.params.printId
    this.props.fetchPrint(Number(printId));
    // debugger
  }

  render() {
    this.props.print.authors
    let defaultImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmusEZgxQkwLCxi-jH4OBNL3PyoKqHassq3SXlbsOR1M1Q13Tq'
    // debugger
    return (
      <PrintShowPage>

        <Header>
          <Avatar 
            src={
              !!this.props.print.author.avatar ? 
              this.props.print.author.avatar : 
              defaultImg
            } 
          />
          <PrintInfo>
            <ul>
              <li>{this.props.print.title}</li> 
              <li>By: 
                <Link
                  to={`/users/${this.props.print.author.id}`}
                >
                  {this.props.print.author.username || ""}
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
            <InputButton>
              <Link
                to='/edit'
                style={{ textDecoration: 'none', cursor: 'pointer' }}
              >
                <Txt>Edit Print</Txt>
              </Link>
            </InputButton>
          </RightPane1>
        </Section1>

        <Section2>
          <LeftPane2>

          </LeftPane2>
          <RightPane2>

          </RightPane2>
        </Section2>

        


      </PrintShowPage>
    )
  }
};

export default PrintShow;