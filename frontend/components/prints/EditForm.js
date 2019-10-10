import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import DeleteButton from './DeleteButton';

//Header1
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 25px;
  padding-bottom: 50px;
  font-family: "Antenna Bold",Helvetica,Arial,sans-serif;
  font-weight: bolder;
  font-size: 24px;
  color: #666;
  border-bottom: 1px solid #bebebe;
  text-transform: uppercase;
`

const InputButton = styled.button`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 40px;
  background-color: #666666;
  color: white;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 300;
  text-transform: uppercase;
  align-items: center;
  padding-top: 10px;
  box-shadow: 8px 14px 18px lightgrey;
  transition: box-shadow 1s;
  text-transform: uppercase;
  :hover {
    box-shadow: 14px 8px 18px lightgrey;
  }
  cursor: pointer;
`

//Header1
const Header2 = styled.header`
  display: flex;
  justify-content: flex-start;
  padding-top: 25px;
  padding-bottom: 25px;
  font-family: "Antenna Bold",Helvetica,Arial,sans-serif;
  font-weight: bolder;
  font-size: 24px;
  color: #666;
  text-transform: uppercase;
`



//Content
const Content = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;
`

//Upload
const UploadSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 265px;
  width: 971px;
  background: white;
  margin-top: 40px
  font-family: "AntennaMedium",Helvetica,Arial,sans-serif;
  font-weight: normal;
  text-transform: uppercase;
  color: #666;
`

const UploadLabel = styled.p`
  margin-bottom: 20px;
`


//INFO
const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`



//InputsWrap

const InputsWrap = styled.section`
  display: flex;
  justify-content: space-between;
`

const InputWrap1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 439px;
  height: 97px;
`

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 439px;
  height: 300px;
`

const Inpt = styled.input`
  padding: 10px;
  border: 1px solid white;
  margin-top: 10px;
  box-shadow: 8px 14px 18px lightgrey;
  transition: box-shadow 1s;
  :hover {
    box-shadow: 14px 8px 18px lightgrey;
  }
  outline: none;
  z-index: 100;
  font-size: 18px;
`

const TxtArea = styled.textarea`
  border: none;
  overflow: auto;
  outline: none;
  font-size: 18px;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  padding: 10px;
  resize: none;
  width: 439;
  height: 300px;
  margin-top: 10px;
  box-shadow: 8px 14px 18px lightgrey;
  transition: box-shadow 1s;
  :hover {
    box-shadow: 14px 8px 18px lightgrey;
  }
`

const Label = styled.label`
  font-size: 19px;
  font-weight: 500px;
  font-family: Helvetica, Arial, sans-serif;
`

const LeftPane = styled.section`
  display: flex;
  flex-direction: column;
`

class PrintForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.print;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  handleFile(e) {
    // debugger
    this.setState({ photoFile: e.currentTarget.files[0] });
  }


  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('print[title]', this.state.title);
    formData.append('print[text]', this.state.text);
    // debugger
    this.state.photoFile ? formData.append('print[photo]', this.state.photoFile) : null;
    formData.append('print[id]', this.state.id);
    this.props.processForm(formData).then((response) => {
      // debugger
      this.props.history.push(`/print/${response.print.id}`)
    });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  }


  render() {
    return (
      <div>
        <Content>

          <h1>{this.props.errors ? this.renderErrors() : []}</h1>

          <form onSubmit={this.handleSubmit}>
            <Header>
              <h1>EDITING {this.props.print.title} </h1>
              <InputButton type='submit'>save & view</InputButton>
            </Header>

            <UploadSection>
              <UploadLabel>UPLOAD YOUR PHOTOS</UploadLabel>
              <div className="upload-btn-wrapper">
                <button className="btn">MY COMPUTER</button>
                <input 
                  type="file" 
                  onChange={this.handleFile.bind(this)}
                  name="myfile" 
                />
              </div>
            </UploadSection>

            <InfoSection>
              <Header2>basic information</Header2>
              <InputsWrap>
                <LeftPane>
                  <InputWrap1>
                    <Label htmlFor='title'>Print Name (required)</Label>
                    <Inpt
                      id='title'
                      type="text"
                      onChange={this.update('title')}
                      value={this.state.title} />
                  </InputWrap1>
                  <DeleteButton
                    print={this.props.print}
                    deletePrint={this.props.deletePrint}
                  />
                </LeftPane>
                <InputWrap>
                  <Label htmlFor='text'>Summary (required)</Label>
                  <TxtArea
                    id='text'
                    type="text"
                    onChange={this.update('text')}
                    value={this.state.text}
                  />
                </InputWrap>
              </InputsWrap>
            </InfoSection>

          </form>
        </Content>
      </div>
    )
  }
}

export default withRouter(PrintForm);