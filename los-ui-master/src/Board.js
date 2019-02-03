import React, {Component} from "react";
import Card from "./Card";
import "./Card.css";
import "./App.css";
import { Link } from "react-router-dom";
import "./game.css";
import logo from "./logo.png";
import Axios from "axios";
import { Modal } from 'react-bootstrap';
import { SERVER_URL } from "./consts";

class Board extends Component {


	constructor(props) {
		super(props);
		this.state = {
			show : false,
			champions: [],
			cards:[],
			deck:[],
			finaldeck : [],
			deckserv : [],
			cartes : [],
			matchmaking : [],
			requete : [],
			participer : [],
			listeJoueurs :[],
			token: this.props.history.location.test.token

		};
		this.recupCartes();
		this.matchGetAll();
	}

	allowDrop(ev) {
		ev.preventDefault();
	}

	drag(ev) {
		ev.dataTransfer.setData("image/svg+xml", ev.target.class);
	}

	drop(ev) {
		ev.preventDefault();
		var data = ev.dataTransfer.getData("image/svg+xml");
		ev.target.appendChild(document.getElementByClassName(data));
	}
	render(){
		return (
			<div id="page">
				<div id="adversaire">
					<div id="deckadv">
					</div>
					<div id="cartesadv">
					</div>
					<div id="defadv">
					</div>
				</div>
				<div id="plateau">
					<div id="jeuadv">
						<div className="pose">
						</div>
						<div className="pose">
						</div>
						<div className="pose">
						</div>
						<div className="pose">
						</div>
						<div className="pose">
						</div>
					</div>
					<div id="lp">
					</div>
					<div id="jeujoueur">
						<div className="pose">
						</div>
						<div className="pose">
						</div>
						<div className="pose">
						</div>
						<div className="pose">
						</div>
						<div className="pose">
						</div>
					</div>
				</div>
				<div id="joueur">
					<div id="defjoueur">
					</div>
					<div id="cartesjoueur">
						<object draggable="true" class="card" type="image/svg+xml" data="demo.svg">🂠</object>
						<object class="card" type="image/svg+xml" data="demo.svg">🂠</object>
						<object class="card" type="image/svg+xml" data="demo.svg">🂠</object>
						<object class="card" type="image/svg+xml" data="demo.svg">🂠</object>
						<object class="card" type="image/svg+xml" data="demo.svg">🂠</object>
					</div>
					<div id="deckjoueur">
						<object class="card" type="image/svg+xml" data="demo.svg">🂠</object>
					</div>
				</div>
			</div>
		);
	}

	randomPick(champs, number) {
		let rChamps = [];
		for (let i = 0; i < number ; i++) {
			let elem = champs.splice(Math.floor(Math.random() * champs.length), 1)[0];
			rChamps.push({"id": elem.key, "name": elem.name, "img": elem.key + "_0.jpg", "attack":elem.info.attack , "defense":elem.info.defense });
		}

		/*Pick aléatoire et constitue le deck de 20 cartes*/
			randomPick(champs) {
				console.log("random");

				for (let i = 0; i < 134; i++) {
					this.state.cards
					.push(
						this.state.champions[i]
					)
				}
				console.log(this.state.cards);
					console.log("SUPERRANDOM");
				for(let i = 0; i < 20; i++){
					 let rand = Math.floor((Math.random() * 133) + 1);
					 	this.state.deck
						.push(
						 this.state.deck[i] = {key : this.state.cards[rand].key}
						)
					}
					this.state.deck.pop();

					this.setState(
					this.state.finaldeck={deck : this.state.deck}
				);

					console.log(this.state.finaldeck)
				}

				creerCarte(){
				console.log("creerCarte");
				for(let i = 0; i < this.state.finaldeck.lenght(); i++){
						this.state.cartes.push(

					<Card id={this.state.finaldeck[i].id}
						  name={this.state.finaldeck[i].name}
						  img={this.state.finaldeck[i].key + "_1.jpg"}
						  attack={this.state.finaldeck[i].info.attack}
						  defense={this.state.finaldeck[i].info.defense}
						  key={i}

					/>)};
					}

/*tente de créer un deck*/
	deckcards(deck) {
		console.log("deckinit");
		console.log(this.state.finaldeck.deck);
		var jsondeck = JSON.stringify(this.state.finaldeck.deck);
		Axios.get(
			SERVER_URL + "/match/initDeck?deck="+ jsondeck +"&token="+ this.state.token
		)
		.then(res => {
				console.log(res.data);
	});
}

		/*Recupe les matchs*/ /*FONCTIONNE YOUPI*/
		matchGetAll(){
			console.log("MatchGetAll")
			Axios.get(
				SERVER_URL + "/matchmaking/getAll?token=" + this.state.token
			)
			.then(res => {
					this.state.listeJoueurs = res.data.data
		});
			console.log(this.state.listeJoueurs);
		}

		/*Choisir a qui envoyer la requete*/
		choix(){
			console.log("choix du joueur")
			for(let i = 0; i < 3; i++){
				this.state.matchmaking.push(this.state.listeJoueurs[i].matchmakingId
			)}
			console.log(this.state.matchmaking);
		}

		/*Participer a un match*/
		participer(){
			console.log("liste des requetes");
			Axios
				.get(
				SERVER_URL + "/matchmaking/participate?token=" + this.state.token
			)
			.then(res => {
				this.state.participer = res.data.data.matchmakingId;
			});
						console.log(this.state.participer)
		}

		/*Refresh les demandes de parties*/
		request(){
			console.log("request");
			Axios.get(
				SERVER_URL + "/matchmaking/request?matchmakingId= " + this.state.matchmaking[0] +"&token=" + this.state.token
			)
			.then(res =>
					this.state.listeJoueurs = res.data.data.request
			)
			console.log(this.state.listeJoueurs)
		}

		/*Accepte la request*/
		acceptRequest(){
			console.log("AcceptRequest")
			Axios.get(
				SERVER_URL + "/matchmaking/acceptRequest?matchmakingId=" + this.state.matchmaking[0] + "&token=" + this.state.token
			)
			.then(res => {
				console.log("res du accept request");
				console.log(res);
				this.props.history.push({
					state :{J1 : res.data.player1,
									J2 : res.data.player2,
									token : this.state.token}
				}
			);
			})
		}


function allowDrop(ev) {
    ev.preventDefault();
  }
  
function drag(ev) {
    ev.dataTransfer.setData("image/svg+xml", ev.target.class);
  }
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("image/svg+xml");
    ev.target.appendChild(document.getElementByClassName(data));
  }

export default Board;
