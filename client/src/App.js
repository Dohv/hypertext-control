import React, { Component } from 'react';
import Login from './components/routes/Login';
import Register from './components/routes/Register';
import NotFound from './components/routes/NotFound';
import Help from './components/routes/Help';
import Home from './components/routes/Home';
import HypertextControl from './components/routes/HypertextControl';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

// This is a functional component, normally I would give each component its own file but this case is okay.
const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => (
    rest.isLoggedIn ? (
      React.createElement(component, props)
    ) : (
      <Redirect to="/Login" />
    )
  )}/>
)

class App extends Component {
  constructor() {
    super();
    this.state = {
      usernameInput: '',
      passwordInput: '',
      user: null,
      isLoggedIn: false,
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
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

  handleLoginSubmit(event) {
    console.log('Logged in!');
    event.preventDefault();
    this.setState(prevState => {
      return { user: prevState.usernameInput, isLoggedIn: true };
    });
  }

  successfulRegistry() {
    this.setState(prevState => {
      return { successfulRegistry: true };
    });
  }

  render() {
    return (
    <BrowserRouter>
      <div className="adaquotes">
        <main>
          <Route exact path="/" component={Home} />
          <PrivateRoute
            exact path="/htc"
            user={this.state.user}
            isLoggedIn
            component={HypertextControl}
          />
          {/*<Route exact path="/HypertextControl" component={HypertextControl} />*/}
          <Route
            exact path="/login"
            component={Login}
            handleSubmit={this.handleLoginSubmit}
            userNameValue={this.state.usernameInput}
            passwordValue={this.state.passwordInput}
            handleUsernameInput={this.handleUsernameSubmit}
            handlePasswordInput={this.handlePasswordSubmit}
          />
          <Route exact path="/register" component={Register} />
          <Route exact path="/notfound" component={NotFound} />
          <Route exact path="/help" component={Help} />
        </main>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;