import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Login = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 75px;
  padding-bottom: 40px;
  font-family: "AntennaLight",Helvetica,Arial,sans-serif;
  font-weight: normal;
  font-size: 28px;
  color: #666;
`

const Sitename = styled.span`
  font-weight: 700;
  color: black;
  font-family: Helvetica, Arial, sans-serif;
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
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
  width: 436px;
  height: 60px;
  margin-top: 25px;
  margin-bottom: 0;
`

const InputButton = styled.button`
  display: flex;
  flex-direction: column;
  width: 436px;
  height: 38px;
  background-color: #248bfb;
  color: white;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
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
  font-size: 14px;
  font-family: Helvetica, Arial, sans-serif;
`

const Page = styled.div`
  display: flex;
  justify-content: space-between;
`

const LeftPane = styled.div`
  display: flex;
  flex-direction: column;
  width: 438px;
  height: 100vh;
  // background-color: blue;
  // padding: 10px;
`

const RightPane = styled.div`
  display: flex;
  flex-direction: column;
  width: 438px;
  height: 100vh;
  // background-color: green;
  // padding: 10px;
`

const CardBox = styled.div`
  height: 120px;
  // width: 300px;
  // background-color: green;
`

const Title = styled.p`
  font-family: "Antenna",Helvetica,Arial,sans-serif;
  font-weight: normal;
  color: #222222;
  font-size: 20px;
  margin: 0;
  margin-bottom: 6px;
`

const Subtitle = styled.p`
  border-bottom: 2px solid #bebebe;
  padding-bottom: .5em;
  margin: 0 0 .5em;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: normal;
  color: #666666;
`

const Body = styled.p`
  font-size: 14px;
  color: #666666;
  font-family: "Antenna",Helvetica,Arial,sans-serif;
  line-height: 130%;
`

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger
    this.props.processForm(this.state).then(() => this.props.history.push('/'));
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
        <Login>
          <p>Sign up for your
          <Sitename> Thingyverse </Sitename>
            account</p>
        </Login>
        <h1>{this.props.errors ? this.renderErrors() : []}</h1>
        <Page>
          <LeftPane>
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
          </LeftPane>
          <RightPane>
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
              <InputButton type="submit">continue</InputButton>
            </Form>
          </form>
          </RightPane>
        </Page>
      </div>
    )
  }
}

export default withRouter(SessionForm);