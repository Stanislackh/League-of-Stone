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
			cards:[]
		};
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
					this.deckcards(this.state.champions);
					this.recupInfosAttack(this.state.champions);

				}
				else{
					console.log("NOK");
				}
				//this.state.champions.push({"id": res.data.id, "name": res.data.name, "img": res.data.image.sprite, "attack":res.data.stats.attack , "defense":res.data.stats.defense });
				//console.log(res);
			});
		}

		/*Pick aléatoire*/
			randomPick(champs) {
				console.log("random");

								let rPick = [];
				let rrPick = [];
				for (let i = 0; i < 134; i++) {
					 /*rPick.push({
					"Heros": this.state.champions[i].key,
					"Image" : this.state.champions[i].key + "_1.jpg",
					"Attack" : this.state.champions[i].info.attack,
					"Defense" :this.state.champions[i].info.defense});
					console.log(rPick[i]);*/

					this.state.cards.push(
					<Card id={this.state.champions[i].id}
						  name={this.state.champions[i].name}
						  img={this.state.champions[i].img}
						  attack={this.state.champions[i].info.attack}
						  defense={this.state.champions[i].info.defense}
						  key={i}
						  //onClick={this.handleClick.bind(this, i)}
					/>);
					}


				console.log("SUPERRANDOM");

				for(let j = 0; j < 20; j++){
					let rand = Math.floor((Math.random() * 135) + 1);
						rrPick.push(rPick[rand]);
						console.log(rrPick[j]);
					}
				return rrPick;
}

	/*EAttribut les valeurs a la carte */

	donneValeur(){
		console.log("re");
	}

	/*Affiche les points de vie*/
/*	pointVieJ() {
		let vieJ = 150;
	return pointVieJ;
	}

	pointVieA() {
		let vieA = 150;
		return vieA;
	}

	gagne() {
		if(vieJ === 0){
			console.log("You are dead")
		}

		if(vieA === 0){
			console.log("You win !")
		}
	}
*/
/*Essaie de prendre les cartes aléatoirement*/
/*dans un vrai langage ...
	def randomPick(champions):
		res =[]
		for i in range(19):
*/



/*tente de créer un deck*/
	deckcards(champs) {
		console.log("deckinit");
		Axios.get(
			SERVER_URL + "/match/initDeck"
		)
		.then(res =>{
		for (let i = 0; i < 120; i++) {
			res.push(
				<Card id={this.state.champions[i].id}
					  name={this.state.champions[i].name}
					  img={this.state.champions[i].img}
					  attack={this.state.champions[i].attack}
					  defense={this.state.champions[i].defense}
					  key={i}/>);
		}
	})
}

	recupInfosAttack(){
		console.log("Recup info attack");
		return this.state.Champions[0].info.attack
	}
/*
	componentWillReceiveProps(nextProps) {
		fetch("champions-info-image-stats-sort.json")
			.then(res => res.json())
			.then(
				(result) => {
					let rChamps = this.randomPick(result, nextProps.number);
					let champions = this.shuffle(rChamps);
					this.setState({
						champions: champions
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			);
	}
*/
/*
	componentDidMount() {
		fetch("champions-info-image-stats-sort.json")
			.then(res => res.json())
			.then(
				(result) => {
					let rChamps = this.randomPick(result, this.props.number);
					let champions = this.shuffle(rChamps);
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			);
		}

	render() {

		const {error, isLoaded, champions} = this.state;

		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			let cards = this.deckcards(champions);
			return (
				<section className="row" classID="board">
					{cards}
				</section>
			);
		}
	}
*/
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
										{this.state.cards}
		                <img class="card" type="image/svg+xml" src=""/>

										<button onClick={()=>this.recupCartes()}> click 1 </button>
										<button onClick={()=>this.randomPick(this.state.champions)}> click 2</button>
                    </div>
                    <div id="deckjoueur">
                        <object class="card" type="image/svg+xml" data="demo.svg">🂠</object>
                    </div>
                </div>
            </div>
        );
    }
	}
export default Board;
