import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Login = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 75px;
  padding-bottom: 98px;
  font-family: "AntennaLight",Helvetica,Arial,sans-serif;
  font-weight: normal;
  font-size: 28px;
  color: #666;
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

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`

const CardBox = styled.div`
  height: 120px;
  width: 300px;
  // background-color: green;
`

const Title = styled.p`
  font-family: "Antenna",Helvetica,Arial,sans-serif;
  font-weight: normal;
  color: #222222;
  font-size: 22px;
  margin: 0;
  margin-bottom: 9px;
`

const Subtitle = styled.p`
  border-bottom: 2px solid #bebebe;
  padding-bottom: .5em;
  margin: 0 0 .5em;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: normal;
  color: #666666;
`

const Body = styled.p`
  font-size: 17px;
  color: #666666;
  font-family: Quicksand
  line-height: 130%;
`

const Demo = styled.button`
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
  background-color: #e9e9e9;
  color: #666666;
  border: 1px solid #bababa;
  border-radius: 20px;
`

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 100;
`

class PrintForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
      photoFile: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.demoSignIn = this.demoSignIn.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  handleFile(e) {
    this.setState({photoFile: e.currentTarget.files[0]});
  }

  demoSignIn() {
    this.setState({
      username: "batman",
      password: "123456"
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    const formData = new FormData();
    formData.append('print[title]', this.state.title);
    formData.append('print[text]', this.state.title);
    // formData.append('print[author_id]', this.props.currentUser.id);
    formData.append('print[photo]', this.state.photoFile);
    this.props.processForm(formData).then(
      (response) => console.log(response.message),
      (response) => console.log(response.responseJSON)
      );
    
    //.then(() => this.props.history.push('/'));
    //* moved to api_util folder
    // $.ajax({
    //   url: '/api/prints',
    //   method: 'POST',
    //   data: formData,
    //   contentType: false,
    //   processData: false
    // })
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
        HI
        <Login>
          <p>Sign in with your
          <Sitename> Thingyverse </Sitename>
            account</p>
        </Login>
        <h1>{this.props.errors ? this.renderErrors() : []}</h1>

        <form onSubmit={this.handleSubmit}>
          <Form>
            <input
              type="file"
              onChange={this.handleFile.bind(this)} />
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