import React from 'react';
import Login from './../Login';
import Register from './../Register';
import NotFound from './../NotFound';
import Help from './../Help';
import Home from './../Home';
import HypertextControl from './../HypertextControl';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

// This is a functional component, normally I would give each component its own file but this case is okay.
const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => (
    props.isLoggedIn ? (
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
      user: null,
      isLoggedIn: false,
    }
  }

  //other methods

  render() {
    return (
    <BrowserRouter>
      <div className="adaquotes">
        <Header />
          <main>
            <Route exact path="/" component={Home} />
            <PrivateRoute
              exact path="/about"
              user={this.state.user}
              isLoggedIn
              component={About}
            />
            <Route exact path="/HypertextControl" component={HypertextControl} />
            <Route exact path="/login" component={Login} />
            <Route component={NotFound} />
          </main>
        <Footer />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;