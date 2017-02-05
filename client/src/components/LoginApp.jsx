import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import $ from 'jquery';

export default class LoginApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    username: '',
    password: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    //request to server here
    event.preventDefault();
    console.log('Submit button clicked: ' + this.state.username);
    alert(
      'Login clicked!\n' + 'username: ' + this.state.username + 
      '\npassword: ' + this.state.password
      );

    // Need to do authentication here
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <section id="login-component">
      <form onSubmit={this.handleSubmit}>
      <h3>Login</h3>
          <div>
            <label>
              username:
              <input
                name="username"
                type="text"
                value={this.state.username}
                onChange={this.handleInputChange} />
            </label>
          </div>
          <div>
            <label>
              password:
              <input
                name="password"
                type="text"
                value={this.state.password}
                onChange={this.handleInputChange} />
            </label>
          </div>
          <input type="submit" value="Login" />
        </form>
        <button onClick={()=>{console.log(this.state)}}>console log state</button>
      </section>
    )
  }
}