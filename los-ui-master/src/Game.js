import React, { Component } from "react";

import axios from "axios";
import { SERVER_URL } from "./consts";

import logo from "./logo.svg";
import "./App.css";

export class Game extends Component {

  constructor(props) {
    super(props);
  }
  handleplay(e) {
    e.preventDefault();
    return (<div>!!!</div>);
  }

  handleDisconnect(e) {
    e.preventDefault();
    
    axios.get(
      SERVER_URL +
      "/users/disconnect"
      )
      .then(res => {
          if (res.data.status === "ok") {
            this.props.history.push(process.env.PUBLIC_URL + "/");
            console.log("appuyer");
          }
        });
  }

  handleTest() {
    console.log("TEST");
    console.log(this.props.isConnected);
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
          <button onClick={ ()=> this.handleTest() }>Test</button>
          <button basic>JOUER</button>
          <button onClick={ this.handleDisconnect }>Se Deconnecter</button>
          <button basic>Suppression Compte</button>
          <button basic>Regles du jeu</button>
        </div>
        </body>
      </div>
    );
  }
}

export default Game;
