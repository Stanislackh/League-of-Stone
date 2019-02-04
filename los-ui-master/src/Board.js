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
import Match from "./Match";
class Board extends Component {


	constructor(props) {
		super(props);
		this.state = {

			show: false,
			token: this.props.token

			show : true,
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
			player1 : [],
			player2 : [],
			positions: [{id:10},{id:20},{id:30},{id:40},{id:50}]
			,

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
	recupCartes() {
		console.log("RecupCarte");
		Axios
			.get(
				SERVER_URL + "/cards/getAll"
			)
			.then(res => {
				if (res.data.status === "ok") {
					this.setState({
						champions: res.data.data
					})
					console.log(this.state.champions);
					this.randomPick(this.state.champions);
					this.deckcards(this.state.finaldeck);
					this.creerCarte();
				} else {
					console.log("NOK");
				}
			});

		}

		/*positionne la carte emplacement 1*/
	handleCardClicked1(event){
					const destHTMLElement = document.getElementById(10);
					const rect = destHTMLElement.getBoundingClientRect();
					event.target.style.position = "absolute";
					event.target.style.left = rect.left +"px";
					event.target.style.margin = "0px";
					event.target.style.top = rect.top +"px";
					event.target.style.width = rect.width +"px";
					event.target.style.height = rect.height +"px";
				}

				/*positionne la carte emplacement 2*/
			handleCardClicked2(event){
							const destHTMLElement = document.getElementById(20);
							const rect = destHTMLElement.getBoundingClientRect();
							event.target.style.position = "absolute";
							event.target.style.left = rect.left +"px";
							event.target.style.margin = "0px";
							event.target.style.top = rect.top +"px";
							event.target.style.width = rect.width +"px";
							event.target.style.height = rect.height +"px";
						}

						/*positionne la carte emplacement 3*/
					handleCardClicked3(event){
									const destHTMLElement = document.getElementById(30);
									const rect = destHTMLElement.getBoundingClientRect();
									event.target.style.position = "absolute";
									event.target.style.left = rect.left +"px";
									event.target.style.margin = "0px";
									event.target.style.top = rect.top +"px";
									event.target.style.width = rect.width +"px";
									event.target.style.height = rect.height +"px";
								}

								/*positionne la carte emplacement 4*/
							handleCardClicked4(event){
											const destHTMLElement = document.getElementById(40);
											const rect = destHTMLElement.getBoundingClientRect();
											event.target.style.position = "absolute";
											event.target.style.left = rect.left +"px";
											event.target.style.margin = "0px";
											event.target.style.top = rect.top +"px";
											event.target.style.width = rect.width +"px";
											event.target.style.height = rect.height +"px";
										}

										/*positionne la carte emplacement 5*/
									handleCardClicked5(event){
													const destHTMLElement = document.getElementById(50);
													const rect = destHTMLElement.getBoundingClientRect();
													event.target.style.position = "absolute";
													event.target.style.left = rect.left +"px";
													event.target.style.margin = "0px";
													event.target.style.top = rect.top +"px";
													event.target.style.width = rect.width +"px";
													event.target.style.height = rect.height +"px";
												}

		/*Pick aléatoire et constitue le deck de 20 cartes*/
			randomPick(champs) {
				console.log("random");

				for (let i = 0; i < 20; i++) {
					let rand = Math.floor((Math.random() * 133) + 1);
					this.state.cards
					.push(
						this.state.champions[rand]
					)
				}
				console.log(this.state.cards);
					console.log("SUPERRANDOM");
				// for(let i = 0; i < 20; i++){
				// 	 //let rand = Math.floor((Math.random() * 133) + 1);
				// 	 	this.state.deck
				// 		.push(
				// 		 this.state.deck[i] = {key : this.state.cards[i].key}
				// 		)
				// 	}
					this.state.deck.pop();


	}

	randomPick(champs, number) {
		let rChamps = [];
		for (let i = 0; i < number; i++) {
			let elem = champs.splice(Math.floor(Math.random() * champs.length), 1)[0];
			rChamps.push({
				"id": elem.key,
				"name": elem.name,
				"img": elem.key + "_0.jpg",
				"attack": elem.info.attack,
				"defense": elem.info.defense
			});
		}
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
		for (let i = 0; i < 20; i++) {
			let rand = Math.floor((Math.random() * 133) + 1);
			this.state.deck
				.push(
					this.state.deck[i] = {key: this.state.cards[rand].key}
				)
		}
		this.state.deck.pop();

		this.setState(
			this.state.finaldeck = {deck: this.state.deck}
		);

		console.log(this.state.finaldeck)
	}

	creerCarte() {
		console.log("creerCarte");
		for (let i = 0; i < this.state.finaldeck.lenght(); i++) {
			this.state.cartes.push(
				<Card id={this.state.finaldeck[i].id}
					  name={this.state.finaldeck[i].name}
					  img={this.state.finaldeck[i].key + "_1.jpg"}
					  attack={this.state.finaldeck[i].info.attack}
					  defense={this.state.finaldeck[i].info.defense}
					  key={i}

				/>)
		}

	}

	/*tente de créer un deck*/
	deckcards(deck) {
		console.log("deckinit");
		console.log(this.state.finaldeck.deck);
		var jsondeck = JSON.stringify(this.state.finaldeck.deck);
		Axios.get(
			SERVER_URL + "/match/initDeck?deck=" + jsondeck + "&token=" + this.state.token
		)
			.then(res => {
				console.log(res.data);
			});
	}

	/*Recupe les matchs*/ /*FONCTIONNE YOUPI*/
	matchGetAll() {
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
	choix() {
		console.log("choix du joueur")
		for (let i = 0; i < 3; i++) {
			this.state.matchmaking.push(this.state.listeJoueurs[i].matchmakingId
			)

		}
		console.log(this.state.matchmaking);
	}

	/*Participer a un match*/
	participer() {
		console.log("liste des requetes");
		Axios
			.get(
				SERVER_URL + "/matchmaking/participate?token=" + this.state.token
			)
			.then(res => {
				this.state.matchmakingId = res.data.data.matchmakingId;
				console.log(this.state.matchmakingId);
			});
		console.log(this.state.participer)
	}

	/*Refresh les demandes de parties*/
	request() {
		console.log("request");
		Axios.get(
			SERVER_URL + "/matchmaking/request?matchmakingId=" + this.state.matchmakingId + "&token=" + this.state.token
		)
			.then(res =>
				this.state.listeJoueurs = res.data.data.request
			);
		console.log(this.state.listeJoueurs)
	}

	/*Accepte la request*/
	acceptRequest() {
		console.log("AcceptRequest");
		Axios.get(
			SERVER_URL + "/matchmaking/acceptRequest?matchmakingId=" + this.state.matchmakingId + "&token=" + this.state.token
		)
			.then(res => {
				console.log("res du accept request");
				console.log(res);
				this.props.history.push({
						state: {
							J1: res.data.player1,
							J2: res.data.player2,
							token: this.state.token
						}
					}
				);

			})

	  }

	/*Attaque directe*/
	  attackPlayer(){
	    Axios
	    .get(
	      SERVER_URL + "/match/attackPlayer?card="+ this.state.card.key + "&token=" + this.state.token
	    )
	    .then(res => {
	      this.state.match = res
			})
	  }

	/*Met fin au tour*/
	  endTurn(){
	    Axios
	    .get(
	      SERVER_URL + "/match/endTurn"+ this.state.card.key + "&token=" + this.state.token
	    )
	    .then(res => {
	      this.state.match = res
			})
	  }

    render(){
        return (
        <div id="page">
                <div id="adversaire" >
                    <div id="deckadv" >
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
                        <div id={this.state.positions[0].id} className="pose">
                        </div>
                        <div id={this.state.positions[1].id} className="pose">
                        </div>
                        <div id={this.state.positions[2].id} className="pose">
                        </div>
                        <div id={this.state.positions[3].id} className="pose">
                        </div>
                        <div id={this.state.positions[4].id} className="pose">
                        </div>
                    </div>
                </div>
                <div id="joueur">
                    <div id="defjoueur">
                    </div>
                    <div id="cartesjoueur">
										<img class="card" onClick={this.handleCardClicked1} src="http://decaf.kouhi.me/lovelive/images/5/55/Kotori_pure_r39_t.jpg"/>
										<img class="card" onClick={this.handleCardClicked2} src="http://decaf.kouhi.me/lovelive/images/5/55/Kotori_pure_r39_t.jpg"/>
										<img class="card" onClick={this.handleCardClicked3} src="http://decaf.kouhi.me/lovelive/images/5/55/Kotori_pure_r39_t.jpg"/>
										<img class="card" onClick={this.handleCardClicked4} src="http://decaf.kouhi.me/lovelive/images/5/55/Kotori_pure_r39_t.jpg"/>
										<img class="card" onClick={this.handleCardClicked5} src="http://decaf.kouhi.me/lovelive/images/5/55/Kotori_pure_r39_t.jpg"/>
                    </div>
                    <div id="deckjoueur">
                        <img class="card" src="https://decaf.kouhi.me/lovelive/images/b/b8/Umi_cool_r287_t.jpg"/>
                    </div>

										<Modal show={this.state.show = true}>
			        				<Modal.Body>
											<button onClick={()=> this.matchGetAll()}>Liste Participants</button>
											<button onClick={()=> this.participer()}>Participer</button>
											<button onClick={()=> this.choix()}>Choix Adversaire</button>
											<button onClick={()=> this.request()}>Refresh Liste Adversaires</button>
											<button onClick={()=> this.acceptRequest()}>AcceptRequest</button>
											<button onClick={()=> this.getMatch()}>getMatch</button>
											<button onClick={()=> this.pickCard()}>PickCard</button>
											<button onClick={()=> this.attack()}>Attack</button>
											<button onClick={()=> this.attackPlayer()}>AttackPlayer</button>
											<button onClick={()=> this.endTurn()}>EndTurn</button>
											</Modal.Body>
			     					</Modal>
                </div>
            </div>
        );
    }

	}

	initMatch(){
		Axios.get(
			SERVER_URL + "/match/getMatch?token=" + this.state.token
		).then(res=> {

		});

	}
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
