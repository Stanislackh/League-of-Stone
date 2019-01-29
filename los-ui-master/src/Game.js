import React, { Component } from "react";

import axios from "axios";
import { SERVER_URL } from "./consts";

import logo from "./logo.svg";
import "./App.css";

import ReactTable from 'react-table';
import { Link } from "react-router-dom";

export class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      token: this.props.test.token,
      isConnected: this.props.test.isConnected
    }
  }


  handleplay(e) {
    e.preventDefault();
    return (<div>!!!</div>);
  }

  handleDisconnect() {
    
    
    axios.get(
      SERVER_URL +
      "/users/disconnect?token=" + this.state.token.data.token
      )
      .then(res => {
          if (res.data.status === "ok") {
            this.props.setSessionToken(res.data.token);
            this.props.history.push(process.env.PUBLIC_URL + "/");
            console.log(process.env.PUBLIC_URL + "/");
            console.log("appuyer");
          }
        });
  }

  handleTest() {
    console.log("TEST");
    console.log(this.state.isConnected);
  }

  listUser() {
    axios.get(SERVER_URL + "/users/getAll")
    .then(res => {
      if(res.data.status === "ok") {
        console.log("Vous êtes "+this.props.test.token.data.name);
        this.props.history.push(process.env.PUBLIC_URL + "/");
        console.log(process.env.PUBLIC_URL + "/");
      }
    })
  }

  render() {
    
    return (
      <div className="App">
        <body>
        <div>
          <p> { this.props.test.token.data.name } </p>
          <button onClick={ ()=> this.handleTest() }>Test</button>
          <button onClick={ ()=> this.listUser() }>JOUER</button>
          <Link to="/signin" onClick={ () => this.handleDisconnect() }>Deconnexion</Link>
          <button basic>Suppression Compte</button>
          <button basic>Regles du jeu</button>
          
        </div>
        </body>
      </div>
    );
  }
}

export default Game;
