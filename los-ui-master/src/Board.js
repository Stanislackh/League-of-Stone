import React, {Component} from "react";
//import "./board.css";
import Card from "./Card";

class Board extends Component {


	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			champions: [],
			secondCardFlipped: null,
			firstCardFlipped: null
		};

    componentWillReceiveProps(nextProps) {
    		fetch("champion.json")
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

    	componentDidMount() {
    		fetch("../pubic/champion.json")
    			.then(res => res.json())
    			.then(
    				(result) => {
    					let rChamps = this.randomPick(result, this.props.number);
    					let champions = this.shuffle(rChamps);
    					this.setState({
    						isLoaded: true,
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

      /*Random le deck*/
      shuffle(a) {
      		for (let i = a.length - 1; i > 0; i--) {
      			const j = Math.floor(Math.random() * (i + 1));
      			[a[i], a[j]] = [a[j], a[i]];
      		}
      		return a;
      	}

    /* Génère les cartes*/
    generateCards(champs) {
    		let cards = [];
    		for (let i = 0; i < champs.length; i++) {
    			cards.push(
    				<Card id={champs[i].id}
    					  name={champs[i].name}
    					  img={champs[i].img}
    					  flipped={champs[i].flipped}
    					  key={i}
    					  onClick={this.handleClick.bind(this, i)}
    				/>);
    		}
    		return cards;
      }
