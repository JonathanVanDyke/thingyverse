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
  componentDidMount() {
    let printId = this.props.match.params.printId
    this.props.fetchPrint(Number(printId));
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
                  to={`/profile/${this.props.print.author.id}`}
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
            { this.props.print.author.id === this.props.current_user.id ?
              <EditButton print={this.props.print} /> : 
              null
            }
            {/* { this.props.print.author.id === this.props.current_user.id ?
              <DeleteButton 
                print={this.props.print} 
                deletePrint={this.props.deletePrint}
              /> : 
              null
            } */}
          </RightPane1>
        </Section1>

        <Section2>
          <LeftPane2>
            <Label>Liked By</Label>
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