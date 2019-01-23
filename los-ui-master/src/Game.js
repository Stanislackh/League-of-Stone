import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";


class Game extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>League of Stones</h2>
          <p>Satania Best Waifu ! </p>
        </header>
        <body>
        <div>
          <button bsStyle="primary" bsSize="large" block>JOUER</button>
          <button bsStyle="primary" bsSize="large" block>Se Deconnecter</button>
          <button bsStyle="primary" bsSize="large" block>Suppression Compte</button>
          <Link to="Regles"><button bsStyle="primary" bsSize="large" block >Regles du jeu</button></Link>
        </div>
        </body>
      </div>
    );
  }
}

export default Game;
