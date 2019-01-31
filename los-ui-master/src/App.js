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
import Card from "./Card";
import SuppressAccount from "./SuppressAccount";

import "./App.css";
import ls from "local-storage";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      
      return rest.test.isConnected ? (
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
    this.disconnect = this.disconnect.bind(this);
    this.setSessionToken = this.setSessionToken.bind(this);
    this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
    this.loadFromLocalStorage = this.loadFromLocalStorage.bind(this);
  }


  setSessionToken(token) {
    console.log("in");
    if(!this.state.isConnected) {
      this.setState({ token, isConnected: true });
    }else {
      this.setState({ token: "", isConnected: false });
    }
    
  }

  disconnect() {
    this.setState({token: "", isConnected: false });
  }

  saveToLocalStorage(state) {
    try {
      const serializedState = JSON.stringify(state)
      this.saveToLocalStorage.setItem('state', serializedState);
    }catch(e) {
      console.log(e);
    }
  }

  loadFromLocalStorage() {
    try {
      const serializedState = localStorage.getItem('state');
      if(serializedState === null) return undefined
        return JSON.parse(serializedState);
    } catch(e) {
      console.log(e);
      return undefined;
    }
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
          <Route path="/board" component={Board} test={this.state}/>
          <Route path="/signup" component={Signup} test={this.state}/>
          <Route path="/regles" component={Regles} test={this.state}/>
          <Route path="/card"  component={Card} test={this.state} />
          <Route path="/SuppressAccount"  component={SuppressAccount} test={this.state} />
          <PrivateRoute component={Game} test={this.state} setSessionToken={this.setSessionToken} />
        </Switch>
      </Router>
    );
  }
}

/*
NavigationBar.propTypes = {
  auth: React.PropTypes.object.isRequired
}

function mapStateProsp(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateProps)(App);
*/
export default App;