// // // import React, { Component } from "react";
// // // import { Link } from "react-router-dom";
// // // import Axios from "axios";
// // // import { SERVER_URL } from "./consts";
// // //
// // //
// // // class Matchmaking extends Component {
// // //
// // //       constructor(props){
// // //         super(props);
// // //         this.state = {
// // //         matchmaking : [],
// // //         requete : [],
// // //         match : [],
// // //         token: this.props.history.location.test.token
// // //       }
// // //
// // //
// /*Participer a un match*/
// participer(){
//   console.log("participer");
//   Axios
//     .get(
//     SERVER_URL + "/matchmaking/participate?token=" + this.state.token
//   )
//   .then(res => {
//     this.state.participer = res.data.data.request;
//   console.log(this.state.participer)
//   })
// }
//
// /*Recupe les matchs*/ /*FONCTIONNE YOUPI*/
// matchGetAll(){
//   console.log("MatchGetAll")
//   Axios.get(
//     SERVER_URL + "/matchmaking/getAll?token=" + this.state.token
//   )
//   .then(res => {
//     this.setState({
//     listejoueurs : res.data.data
//   })
// });
//   console.log(this.state.listeJoueurs)
// }
//
// /*Refresh les demandes de parties*/
// request(){
//   console.log("requestMatch")
//   Axios.get(
//     SERVER_URL + "/matchmaking/request?matchmakingId= " + this.state.listeJoueurs.matchmakingId +"&token=" + this.state.token
//   )
//   .then(res =>
//       this.state.listeJoueurs = res.data.data
//   )
//   console.log(this.state.listeJoueurs)
// }
//
// /*Accepte la request*/
// acceptRequest(){
//   console.log("AccpetRequest")
//   Axios.get(
//     SERVER_URL + "/matchmaking/acceptRequest?matchmakingId=" + this.state.matchmakingId + "&token=" + this.state.token
//   )
// }
