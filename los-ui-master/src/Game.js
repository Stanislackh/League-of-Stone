import React, { Component } from "react";
import { Link } from "react-router-dom";
import { redirect } from "react-router-dom";

import axios from "axios";
import { SERVER_URL } from "./consts";

import logo from "./logo.svg";
import "./App.css";

class Game extends Component {

  handleplay(e) {
    e.preventDefault();
    return (<div>!!!</div>);
  }

  handleDisconnect(e) {
    e.preventDefault();
    
    axios.get(
      SERVER_URL +
      "/users/disconnect"
      );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>League of Stones</h2>
          <p>Bienvenue</p>
        </header>
        <body>
        <div>
          <button onClick={this.handleDisconnect}>Deconnexion</button>
          <button >Damn</button>
        </div>
        </body>
      </div>
    );
  }
}

export default Game;
