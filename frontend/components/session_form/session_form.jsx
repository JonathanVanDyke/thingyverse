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
`

const Inpt = styled.input`
  padding: 10px;
  border: 1px solid white;
  margin-top: 10px;
`

const Label = styled.label`
  font-size: 14px;
  font-family: Helvetica, Arial, sans-serif;
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

  render() {
    return (
      <div>
        <Login>
          <p>Sign up for your
          <Sitename> Thingyverse </Sitename>
            account</p>
        </Login>
        <h1>{this.state.errors ? this.state.errors : []}</h1>
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
      </div>
    )
  }
}

export default withRouter(SessionForm);