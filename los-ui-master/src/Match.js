/*Les fonctions de match attack ect...*/

import {Component} from "react";
import "./Card.css";
import "./App.css";
import Axios from "axios";
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
    .then(res => {
        this.setState({match: res.status});
      }
    )
  }

/*Pioche une carte*/
  pickCard(){
    Axios
      .get(
      SERVER_URL + "/match/pickCard?token=" + this.state.token
    )
    .then(res => {
        this.setState({res});
      }
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
    .then(res=> {
        this.setState({match: res});
      }
    )
  }

/*Attaque directe*/
  attackDirect(){
    Axios
    .get(
      SERVER_URL + "/match/attackPlayer?card="+ this.state.card.key + "&token=" + this.state.token
    )
    .then(res=>{
      this.setState({match: res});
    })
  }

/*Met fin au tour*/
  endTurn(){
    Axios
    .get(
      SERVER_URL + "/match/endTurn"+ this.state.card.key + "&token=" + this.state.token
    )
    .then(res=>{
      this.setState({match: res});
    })
  }

  render(){
    return(
    console.log(this.state.match)
    )
    
  }



}

export default Match;
