import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      successfulRegistry: false,
      usernameInput: '',
      firstNameInput: '',
      lastNameInput: '',
      emailInput: '',
      passwordInput: '',
    };
    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handleFirstNameInput = this.handleFirstNameInput.bind(this);
    this.handleLastNameInput = this.handleLastNameInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
  }

  handleFirstNameInput(event) {
    console.log(event.target.value);
    this.setState({
      firstNameInput: event.target.value
    });
  }

  handleLastNameInput(event) {
    console.log(event.target.value);
    this.setState({
      lastNameInput: event.target.value
    });
  }

  handleEmailInput(event) {
    console.log(event.target.value);
    this.setState({
      emailInput: event.target.value
    });
  }

  handleUsernameInput(event) {
    console.log(event.target.value);
    this.setState({
      usernameInput: event.target.value
    });
  }

  handlePasswordInput(event) {
    this.setState({
      passwordInput: event.target.value
    });
  }

    // username: req.body.username,
    // first_name: req.body.first_name,
    // last_name: req.body.last_name,
    // email: req.body.email,
    // password: hash,
  handleSubmit(event) {
    event.preventDefault();
    fetch('/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.userNameInput,
        first_name: this.state.firstNameInput,
        last_name: this.state.lastNameInput,
        email: this.state.emailInput,
        password: this.state.passwordInput,
      })
    })
    .then(res => {
      return res.json();
    })
    .then(jsonRes => {
      console.log(jsonRes);
      if (jsonRes.message === 'ok') {
        setState(prevState => {
          return { successfulRegistry: prevState.successfulRegistry };
        });
      } else {
        console.log('error');
      }
    });
  }

  render() {
    return (
      <div className="login">
        <h1>Register</h1>
        <form
          className="register-form"
          onSubmit={this.handleSubmit}
        >
        <label>First Name</label>
        <input
          type="text"
          value={this.state.firstNameValue}
          onChange={this.handleFirstNameInput}
          placeholder="First Name"
        />
        <label>Last Name</label>
        <input
          type="text"
          value={this.state.lastNameInput}
          onChange={this.handleLastNameInput}
          placeholder="Last Name"
        />
        <label>Email</label>
        <input
          type="email"
          value={this.state.emailInput}
          onChange={this.handleEmailInput}
          placeholder="Email"
        />
        <label>Username</label>
        <input
          type="text"
          value={this.state.usernameInput}
          onChange={this.handleUsernameInput}
          placeholder="Username"
        />
        <label>Password</label>
        <input
          type="password"
          value={this.state.usernameInput}
          onChange={this.handlePasswordInput}
          placeholder="Username"
        />
        <button>Save</button>
      </form>
      </div>
    );
  }
}

export default Register;

// <% include ../partials/boilerplate %>

// <form method='POST' action='/auth/register'>
//   <input name='username' type='text' placeholder='username' />
//   <input name='first_name' type='text' placeholder='first name' />
//   <input name='last_name' type='text' placeholder='last name' />
//   <input name='email' type='email' placeholder='email' />
//   <input name='password' type='password' placeholder='password' />
//   <input type='submit' value='Register!' />
// </form>

// <% include ../partials/end %>
