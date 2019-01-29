import React, {Component} from "react";

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {Link} from "react-router-dom";
import axios from "axios";
import {SERVER_URL} from "./consts";
import { Link } from "react-router-dom";


class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: this.props.location.state.token
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
                    this.props.setSessionToken(res.data.token);
                    this.props.history.push(process.env.PUBLIC_URL + "/");
                    this.props.history.push({pathname:process.env.PUBLIC_URL + "/"})
                }
            });
    }

    render() {
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
    }
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
