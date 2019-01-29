import React, {Component} from "react";
import Card from "./Card";
import "./Card.css";
class Board extends Component {


	constructor(props) {
		super(props);
		this.state = {
			errsor: null,
			isLoaded: false,
			champions: [],
		};
	}





	randomPick(champs, number) {
		let rChamps = [];
		for (let i = 0; i < number ; i++) {
			let elem = champs.splice(Math.floor(Math.random() * champs.length), 1)[0];
			rChamps.push({"id": elem.key, "name": elem.name, "img": elem.key + "_0.jpg", "attack":elem.info.attack , "defense":elem.info.defense });
		}

		return rChamps;
	}

	deckcards(champs) {
		let cards = [];
		for (let i = 0; i < 120; i++) {
			cards.push(
				<Card id={champs[i].id}
					  name={champs[i].name}
					  img={champs[i].img}
					  attack={champs[i].attack}
					  defense={champs[i].defense}
					  key={i}

				/>);
		}
		return cards;
	}


	shuffle(a) {
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	}




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

	componentDidMount() {
		fetch("champions-info-image-stats-sort.json")
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
}

export default Board;
