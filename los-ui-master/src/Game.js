import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import {SERVER_URL} from "./consts";
import "./game.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import App from "./App";
//import {ls} from "local-storage";

class Game extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            token: this.props.test.token
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
      
      axios
      .get(SERVER_URL + "/users/amIConnected?token=" + this.state.token)
      .then(res => {
        if(res.data.status === "ok") {
          this.props.history.push(process.env.PUBLIC_URL);
        }
      })
      
    }

    handleCards() {
      axios
            .get(
                SERVER_URL + "/users/getAll"
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

    suppression() {
      
    }
/*
    componentDidMount() {
      this.setState({
        token: this.props.test.token,
        isConnected: this.props.test.isConnected
      });
      ls.set("token", this.props.test.token);
    }

    componentDidUpdate() {
      const state = {
        token: this.props.store.token,
        isConnected: this.props.store.isConnected
      }

      window.localStorage.setItem("saved_state", JSON.stringify(state));
    }
*/
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
              <Link to="SuppressAccount"><input className="bla" type="submit" value="Supprimer compte" /></Link>
              <Link to="Regles"><input className="bla" type="submit" value="Règles du jeu" /></Link>
              
              <input className="bla" type="button" onClick={ ()=>this.handleUsers() } value="Get users" />
              <input className="bla" type="button" onClick={ ()=>this.handleCards() } value="Get cards" />


            </div>
        </div>
      </div>
    );
  }
}

export default Game;
