import React from 'react';
import { withRouter } from 'react-router-dom';

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
        <h1>{this.state.errors ? this.state.errors : []}</h1>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.update('username')}
            value={this.state.username} />
          <input
            type="text"
            onChange={this.update('password')}
            value={this.state.password} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);