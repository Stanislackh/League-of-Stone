import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import {SERVER_URL} from "./consts";
import "./game.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: this.props.location.state.token
        };
        this.deconnexion = this.deconnexion.bind(this);
    }

    deconnexion() {
        axios
            .get(
                SERVER_URL + "/users/disconnect?token=" + this.state.token
            )
            .then(res => {
                if (res.data.status === "ok") {
                    this.props.setSessionToken(res.data.token);
                    this.props.history.push(process.env.PUBLIC_URL);
                }
            });
    }

    handleUsers() {
      /*
      axios
      .get(SERVER_URL + "/users/amIConnected")
      .then(res => {
        if(res.data.status === "ok") {
          this.props.history.push(process.env.PUBLIC_URL);
        }
      })*/
    }

    handleCards() {
      axios
            .get(
                SERVER_URL + "/cards/getAll"
            )
            .then(res => {
                if (res.data.status === "ok") {
                    console.log(res.data);
                    this.props.history.push(process.env.PUBLIC_URL);
                }
                else{
                  console.log("no");
                }
            });
    }

  render() {
    return (
      <div id="accueil">
        <header>
          <img id="logo" src={logo} alt="logo" />
        </header>
        <div id="milieu">
            <div id="pla">
              <Link to="Board"><input className="bla" type="submit" value="Jouer!" /></Link>
              <Link to="Signin" onClick={() => this.deconnexion() }><input className="bla" type="submit" value="Deconnexion" /></Link>
              <input className="bla" type="button" value="Supprimer compte" />
              <Link to="Regles"><input className="bla" type="submit" value="Règles du jeu" /></Link>
              
              <input className="bla" type="button" onClick={ ()=>this.handleUsers() } value="Get users" />
              <input className="bla" type="button" onClick={ ()=>this.handleCards() } value="Get users" />

            </div>
        </div>
      </div>
    );
  }
}

export default Game;
