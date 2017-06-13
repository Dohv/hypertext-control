import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <h1>Log In</h1>
        <form
          className="register-form"
          onSubmit={this.props.handleSubmit}
        >
        <label>Username</label>
        <input
          type="text"
          value={this.props.usernameValue}
          onChange={this.props.handleUsernameInput}
          placeholder="Username"
        />
        <label>Password</label>
        <input
          type="password"
          value={this.props.passwordValue}
          onChange={this.props.handlePasswordInput}
          placeholder="Username"
        />
        <button>Login</button>
      </form>
      </div>
    );
  }
}

export default Login;
// <% include ../partials/boilerplate %>

// <form method='POST' action='/auth/login'>
//   <input name='username' type='text' placeholder='username' />
//   <input name='password' type='password' placeholder='password' />
//   <input type='submit' value='Log in!' />
// </form>

// <% include ../partials/end %>
