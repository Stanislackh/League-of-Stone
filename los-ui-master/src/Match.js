/*Les fonctions de match attack ect...*/

import React, {Component} from "react";
import Card from "./Card";
import "./Card.css";
import "./App.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import Axios from "axios";
import { Modal } from 'react-bootstrap';
import { SERVER_URL } from "./consts";


class Match extends Component {

  constructor(props){
    super(props);
    this.state = {
      match : [],
      token: this.props.history.location.test.token
    }
  }

  getMatch(){
    Axios
      .get(
      SERVER_URL + "/match/getMatch?token=" + this.state.token
    )
    .then(res =>
      this.state.match = res.status
    )
    console.log(this.state.match)
  }

/*Pioche une carte*/
  pickCard(){
    Axios
      .get(
      SERVER_URL + "/match/pickCard?token=" + this.state.token
    )
    .then(res =>
      this.state.match = res
    )
  }

/*Joue une carte*/
  playCard(){
    Axios
    .get(
      SERVER_URL + "/match/playCard?card="+ this.state.card.key + "&token=" + this.state.token
    )
  }

/*Attaque*/
  attack(){
    Axios
    .get(
      SERVER_URL + "/match/attack?card="+ this.state.card.key + "&ennemmyCard=" + this.state.ennemycard.key + "?token=" + this.state.token
    )
    .then(res=>
      this.state.match = res)
  }

/*Attaque directe*/
  attack(){
    Axios
    .get(
      SERVER_URL + "/match/attackPlayer?card="+ this.state.card.key + "&token=" + this.state.token
    )
    .then(res=>
      this.state.match = res)
  }

/*Met fin au tour*/
  endTurn(){
    Axios
    .get(
      SERVER_URL + "/match/endTurn"+ this.state.card.key + "&token=" + this.state.token
    )
    .then(res=>
      this.state.match = res)
  }

  render(){
    return(
    console.log(this.state.match)
    )
    
  }



}

export default Match;
