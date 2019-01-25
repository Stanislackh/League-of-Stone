import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./game.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import logo from "./logo.png";
import { Link } from "react-router-dom";
class Regles extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="accueil">
        <header>
        <Link to="Game"><img id="logo" src={logo} alt="logo" /></Link>
        </header>
        <div id="regle">
          <div id="ecart">
            Les règles sont les suivantes :
            <p>
              - Réduire la vie de votre adversaire à 0 en vous aidant des monstres
              mis à votre disposition dans votre deck de 20 cartes tirées aléatoirement
              dans un pool de 150 cartes disponibles</p>
            <p>
              - Vous avez droit à 3 actions par tour:
            <ul id="actions"><li>Vous pouvez piocher une carte</li>
              <li>Poser une carte</li>
              <li>Vous pouvez attaquer les cartes adverses</li></ul>
              - Si votre monstre à moins d'attaque que celui de l'adversaire, il s'auto détruira,
            si votre monstre à le même niveau d'attaque que le monstre adverse, les deux seront détruits,
            et si votre monstre a plus d'attaque il détruit le monstre adverse.
            Une carte posée à un tour ne peux attaquer qu'au tour suivant.
            Si votre adversaire n'a pas de monstre sur le plateau vous pourrez l'attaquer directement.
          </p>
        <p>
          Good Luck ! Have Fun !
        </p>
        </div>
        </div>
      </div>
    );
  }
}

export default Regles;
