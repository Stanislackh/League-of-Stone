import React, {Component} from "react";
import Card from "./Card";
import "./Card.css";
import "./App.css";
import { Link } from "react-router-dom";
import "./game.css";
import logo from "./logo.png";
import Axios from "axios";
import { SERVER_URL } from "./consts";

class Board extends Component {


	constructor(props) {
		super(props);
		this.state = {
			champions: [],
			cards:[],
			deck:[],
			finaldeck : [],
			deckserv : [],
			token: this.props.history.location.test.token

		};
		this.recupCartes();
	}

/*Essaie de récupérer les cartes*/
	recupCartes(){
		console.log("RecupCarte");
			Axios
				.get(
				SERVER_URL + "/cards/getAll"
			)
			.then(res => {
				if(res.data.status === "ok"){
					this.setState({
						champions : res.data.data
					})
					console.log(this.state.champions)
					this.randomPick(this.state.champions);
					this.deckcards(this.state.finaldeck);
				}
				else{
					console.log("NOK");
				}
				//this.state.champions.push({"id": res.data.id, "name": res.data.name, "img": res.data.image.sprite, "attack":res.data.stats.attack , "defense":res.data.stats.defense });
				//console.log(res);
			});
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
					 	// );
					}
					this.state.deck.pop();

					this.setState(
					this.state.finaldeck={deck : this.state.deck}
				);

					console.log(this.state.finaldeck)
				}

				/*	<Card id={this.state.champions[i].id}
						  name={this.state.champions[i].name}
						  img={this.state.champions[i].key + "_1.jpg"}
						  attack={this.state.champions[i].info.attack}
						  defense={this.state.champions[i].info.defense}
						  key={i}
					/>);*/

/*tente de créer un deck*/
	deckcards(deck) {
		console.log("deckinit");
		console.log(this.state.finaldeck.deck);
		var variable = JSON.stringify(this.state.finaldeck.deck);
		Axios.get(
			SERVER_URL + "/match/initDeck?deck="+ variable +"&token="+ this.state.token
		)
		.then(res => {
				console.log(res.data);
	});
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
										<img className="card" src= "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/_1.jpg" />
										<img class="card" src="http://decaf.kouhi.me/lovelive/images/5/55/Kotori_pure_r39_t.jpg"/>
										<img class="card" src="http://decaf.kouhi.me/lovelive/images/5/55/Kotori_pure_r39_t.jpg"/>
										<img class="card" src="http://decaf.kouhi.me/lovelive/images/5/55/Kotori_pure_r39_t.jpg"/>
										<img class="card" src="http://decaf.kouhi.me/lovelive/images/5/55/Kotori_pure_r39_t.jpg"/>
										<img class="card" src="http://decaf.kouhi.me/lovelive/images/5/55/Kotori_pure_r39_t.jpg"/>
										<button onClick={()=>this.recupCartes()}> click 1 </button>
                    </div>
                    <div id="deckjoueur">
                        <img class="card" src="http://decaf.kouhi.me/lovelive/images/5/55/Kotori_pure_r39_t.jpg"/>
                    </div>
                </div>
            </div>
        );
    }
	}
export default Board;
