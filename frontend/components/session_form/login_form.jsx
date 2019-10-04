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
const Input = styled.div`
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
`

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.demoSignIn = this.demoSignIn.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  demoSignIn() {
    this.setState({
      username: "batman",
      password: "123456"
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger
    this.props.processForm(this.state).then(() => this.props.history.push('/'));
  }

  renderErrors() {
    return(
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
    this.props.deleteErrors()
  }

  render() {
    return (
      <div>
        <Login>
          <p>Sign in with your 
          <Sitename> Thingyverse </Sitename>
          account</p>
        </Login>
        <h1>{this.props.errors ? this.renderErrors() : []}</h1>
        <form onSubmit={this.handleSubmit}>
          <Form>
            
            <Input>
              <Label htmlFor='username'>Username</Label>
              <Inpt
                id='username'
                type="text"
                onChange={this.update('username')}
                value={this.state.username} />
            </Input>
            <Input>
              <Label htmlFor='password'>Password</Label>
              <Inpt
                type="password"
                onChange={this.update('password')}
                value={this.state.password} />
            </Input>
            <ButtonWrap>
              <InputButton type="submit">sign in</InputButton>
              <Demo type="submit" onClick={this.demoSignIn}>Demo</Demo>
            </ButtonWrap>
          </Form>
        </form>
        <Login>
          <p>NEW TO THINGYVERSE? <span> </span>
            <span> 
              <Link 
                to='/signup'
                style={{ textDecoration: 'none', cursor: 'pointer', color: '#238bfb' }}> 
                  CREATE AN ACCOUNT>
              </Link> 
            </span>
          </p>
        </Login>

        <Footer>
          <CardBox>
            <Title>Community</Title>
            <Subtitle>create and share your creations </Subtitle>
            <Body>With a Thingyverse account, you can draw inspiration from others within the community and share your own unique creations.</Body>
          </CardBox>
          <CardBox>
            <Title>Organize</Title>
            <Subtitle>your print files in one place</Subtitle>
            <Body>Thingyverse gives you the ability to make collections of your prints as well as other's prints! Organize to your heart's content.</Body>
          </CardBox>
          <CardBox>
            <Title>6+ Designs</Title>
            <Subtitle>Small/close community</Subtitle>
            <Body>This site is brand new, feel free to poke around and add to our growing collections.</Body>
          </CardBox>
        </Footer>
      </div>
    )
  }
}

export default withRouter(LoginForm);