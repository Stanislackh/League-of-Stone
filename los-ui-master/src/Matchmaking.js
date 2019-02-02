// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Axios from "axios";
// import { SERVER_URL } from "./consts";
//
//
// class Matchmaking extends Component {
//
//       constructor(props){
//         super(props);
//         this.state = {
//         matchmaking : [],
//         requete : [],
//         match : [],
//         token: this.props.history.location.test.token
//       }
//
//
//       participer(){
//         console.log("participer");
//         Axios
//           .get(
//           SERVER_URL + "/matchmaking/participate"
//         )
//         .then(res => {
//           console.log("participate");
//           this.setState({
//           matchmaking : res.matchmakingID,
//           requete : res.request,
//           match : res.match
//         })
//           console.log(res)
//         })
//       }
// }
