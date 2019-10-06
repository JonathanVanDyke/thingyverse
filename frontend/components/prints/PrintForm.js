import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//Header
const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  padding-top: 25px;
  padding-bottom: 50px;
  font-family: "Antenna Bold",Helvetica,Arial,sans-serif;
  font-weight: normal;
  font-size: 24px;
  color: #666;
  border-bottom: 1px solid #bebebe;
`

//Upload
const UploadSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 265px;
  width: 971px;
  background: white;
  margin-top: 40px
`

const Form = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "AntennaLight",Helvetica,Arial,sans-serif;
  font-weight: normal;
  font-size: 12px;
  color: #666;
  justify-content: space-between;
  align-items: center;
`
const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 410px;
  height: 60px;
`

const InputButton = styled.button`
  display: flex;
  flex-direction: column;
  width: 112px;
  height: 38px;
  background-color: #248bfb;
  color: white;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  align-items: center;
  padding-top: 10px;
  margin-top: 15px;
  box-shadow: 5px 10px 18px #888888;
  transition: box-shadow 1s;
  :hover {
    box-shadow: 10px 5px 18px #888888;
  }
  z-index: 100;
`

const Inpt = styled.input`
  padding: 10px;
  border: 1px solid white;
  margin-top: 10px;
  box-shadow: 5px 10px 18px #888888;
  transition: box-shadow 1s;
  :hover {
    box-shadow: 10px 5px 18px #888888;
  }
  outline: none;
  z-index: 100;
`

const Label = styled.label`
  font-size: 19px;
  font-weight: 500px;
  font-family: Helvetica, Arial, sans-serif;
`

const Sitename = styled.span`
  font-weight: 700;
  color: black;
  font-family: Helvetica, Arial, sans-serif;
`

class PrintForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   title: "",
    //   text: "",
    //   photoFile: null
    // };
    this.state = this.props.print;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  handleFile(e) {
    this.setState({photoFile: e.currentTarget.files[0]});
  }


  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('print[title]', this.state.title);
    formData.append('print[text]', this.state.text);
    formData.append('print[photo]', this.state.photoFile);
    this.props.processForm(formData).then((response) => {
      // this.props.history.push(`/print/${response.print.id}`)
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

  componentDidMount() {
    // this.props.deleteErrors()
  }

  render() {
    return (
      <div>
        <Header>
          <h1>
            CREATING A NEW PRINT 
          </h1>
        </Header>

        <h1>{this.props.errors ? this.renderErrors() : []}</h1>

        <form onSubmit={this.handleSubmit}>
          <Form>
            <UploadSection>
              <input
                type="file"
                onChange={this.handleFile.bind(this)} 
              />
            </UploadSection>

            <InputWrap>
              <Label htmlFor='title'>Print Name (required)</Label>
              <Inpt
                id='title'
                type="text"
                onChange={this.update('title')}
                value={this.state.title} />
            </InputWrap>
            <InputWrap>
              <Label htmlFor='text'>Description (required)</Label>
              <Inpt
                id='text'
                type="text"
                onChange={this.update('text')}
                value={this.state.text} />
            </InputWrap>
            {/* <InputWrap> */}
              {/* <Label htmlFor='password'>Password</Label> */}
            {/* <Inpt
              type="file"
              onChange={this.handleFile.bind(this)}/> */}
            {/* </InputWrap> */}
            {/* <ButtonWrap> */}
              <InputButton type='submit' value='Create Print!'/>
            {/* </ButtonWrap> */}
          </Form>
        </form>
      </div>
    )
  }
}

export default withRouter(PrintForm);