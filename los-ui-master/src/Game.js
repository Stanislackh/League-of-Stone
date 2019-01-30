import React, {Component} from "react";
import "./App.css";
import {Link} from "react-router-dom";
import axios from "axios";
import {SERVER_URL} from "./consts";
import "./game.css";
import logo from "./logo.png";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: this.props.location.token
        };
        this.deconnexion = this.deconnexion.bind(this);
    }

    deconnexion(e) {
        e.preventDefault();
        axios
            .get(
                SERVER_URL + "/users/disconnect?token=" + this.state.token
            )
            .then(res => {
                if (res.data.status === "ok") {
                    this.props.history.push(process.env.PUBLIC_URL + "/signin");
                }
            });
    }

    /*render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>League of Stones</h2>
                    <p>Bienvenue</p>
                    <Link to="/signin" onClick={this.deconnexion}>Deconnexion</Link>
                </header>
            </div>
        );
    }*/
  render() {
    return (
      <div id="accueil">
        <header>
          <img id="logo" src={logo} alt="logo" />
        </header>
        <div id="milieu">
            <div id="pla">
              <Link to="Board"><input className="bla" type="submit" value="Jouer!" /></Link>
              <Link to="Signin" onClick={this.deconnexion} ><input className="bla" type="submit" value="Deconnexion" /></Link>
              <input className="bla" type="button" value="Supprimer compte" />
              <Link to={{pathname:"Regles", token:this.state.token}} ><input className="bla" type="submit" value="Règles du jeu" /></Link>
            </div>
        </div>
      </div>
    );
  }
}

export default Game;
