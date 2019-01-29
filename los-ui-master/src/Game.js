import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import "./game.css";
import logo from "./logo.png";

class Game extends Component {
  render() {
    return (
      <div id="accueil">
        <header>
          <img id="logo" src={logo} alt="logo" />
        </header>
        <div id="milieu">
            <div id="pla">
              <Link to="Board"><input className="bla" type="submit" value="Jouer!" /></Link>
              <Link to="Signin"><input className="bla" type="submit" value="Deconnexion" /></Link>
              <input className="bla" type="button" value="Supprimer compte" />
              <Link to="Regles"><input className="bla" type="submit" value="Règles du jeu" /></Link>
            </div>
        </div>
      </div>
    );
  }
}

export default Game;
