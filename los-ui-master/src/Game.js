import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class Game extends Component {
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
          <button basic>JOUER</button>
          <button basic>Se Deconnecter</button>
          <button basic>Suppression Compte</button>
          <button basic>Regles du jeu</button>
        </div>
        </body>
      </div>
    );
  }
}

export default Game;
