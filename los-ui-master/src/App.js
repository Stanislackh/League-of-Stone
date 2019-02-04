import React, { Component } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Signin from "./Signin";
import Signup from "./Signup";
import Game from "./Game";
import Regles from "./Regles";
import Board from "./Board";
import SuppressAccount from "./SuppressAccount";
import Card from "./Card";
import "./App.css";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return rest.isConnected ? (
        <Component {...rest} />
      ) : (
        <Redirect to="/signin" />
      );
    }}
  />
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      isConnected: false
    };

    this.setSessionToken = this.setSessionToken.bind(this);
    this.supSession = this.supSession.bind(this);
  }

  setSessionToken(token) {
    this.setState({ token, isConnected: true });
  }

  supSession(){
  	this.setState({ isConnected: false });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/signin"
            render={props => (
              <Signin setSessionToken={this.setSessionToken} {...props} />
            )}
          />
          />
          <PrivateRoute path="/board" component={Board}  {...this.state}/>
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/regles" component={Regles} {...this.state}/>
          <PrivateRoute path="/SuppressAccount" component={SuppressAccount} {...this.state} />
          <PrivateRoute component={Game} {...this.state} setSessionToken={this.setDisconnect} />
        </Switch>
      </Router>
    );
  }
}

export default App;
