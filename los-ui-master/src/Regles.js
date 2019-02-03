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
         <div id= "ecart">
        Les règles sont les suivantes :
        <p>
        Réduire la vie de votre adversaire à 0 en vous aidant des champions
        mis à votre disposition dans votre deck composé de 20 cartes tirées aléatoirement
        dans un pool de 150 cartes disponibles</p>
        <p>
        <ul>
        Vous avez droit à 3 actions par tour:
          <li>Vous pouvez piocher une carte</li>
          <ul>Vous pouvez attaquer les cartes adverses</ul>

            <li>Si votre monstre à moins d'attaque que celui de l'adversaire,
            il s'auto détruiraet vous subiez des dégâts à la hauteur des points
            d'attaque du montre adverse moins l'armure de votre monstre.</li>

            <li>Si votre monstre à le même niveau d'attaque que le montre
            adverse les deux seront détruites. </li>

            <li>Si votre monstre a plus d'attaque il détruit le monstre adverse
            etinflige des dégats aux points de vie de l'adversaire à la hauteur
            des points d'armure du monstre soustrait à l'attaque
            de votre monstre</li>

            <li>Si il n'y a pas de monstre sur le plateau vous pouvez attaquer
            directement les points de vie de votre adversaire
            et dans le cas contraire il vous attaquera directment</li>

          <li>Une carte posée à un tour ne peux attaquer qu'au tour suivant.</li>

          <li>Si votre adversaire n'a pas de monstre sur le plateau vous pourrez l'attaquer directement.</li>
          </ul>
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
