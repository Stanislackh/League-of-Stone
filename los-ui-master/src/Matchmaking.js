// // import React, { Component } from "react";
// // import { Link } from "react-router-dom";
// // import Axios from "axios";
// // import { SERVER_URL } from "./consts";
// //
// //
// // class Matchmaking extends Component {
// //
// //       constructor(props){
// //         super(props);
// //         this.state = {
// //         matchmaking : [],
// //         requete : [],
// //         match : [],
// //         token: this.props.history.location.test.token
// //       }
// //
// //
// /*Participer a un match*/
// participer(){
//   console.log("participer");
//   Axios
//     .get(
//     SERVER_URL + "/matchmaking/participate?token=" + this.state.token
//   )
//   .then(res => {
//     this.state.matchmaking = res.data.data.matchmakingId;
//     this.state.requete = res.data.data.request;
//   console.log(this.state.matchmaking)
//   console.log(this.state.requete)
//   console.log(res)
//   })
// }
//
//
// /*Recupe les matchs*/
// matchGetAll(){
//   console.log("MatchGetAll")
//   Axios.get(
//     SERVER_URL + "/matchmaking/getAll?token=" + this.state.token
//   )
//   .then(res => {
//     console.log("res getAll")
//     //recup mail nom et matchmaking id
//   }
//   )
// }
//
// /*Refresh les demandnes de parties*/
// request(){
//   console.log("requestMatch")
//   Axios.get(
//     SERVER_URL + "/matchmaking/request?matchmaking= " + this.state.matchmakingId +"&token=" + this.state.token
//   )
//   .then(res =>
//       this.state.listeJoueurs = res
//   )
// }
