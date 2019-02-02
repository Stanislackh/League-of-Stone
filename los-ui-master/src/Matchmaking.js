import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { SERVER_URL } from "./consts";


class Matchmaking extends Component {

      constructor(props){
        super(props);
        this.state = {
        matchmaking : [],
        token: this.props.history.location.test.token
      }


      participer(){
        console.log("participer");
        Axios
          .get(
          SERVER_URL + "/matchmaking/participate"
        )
        .then(res => {
          console.log("participate");
          //matchmakingID et requete a récupérer
        }


        )
      }
}
