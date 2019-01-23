import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

class Regles extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>League of Stones</h2>
          <p>Règles du jeu</p>
        </header>
        <body>
        <div>
        Les règles sont les suivantes :
        <p>
        Réduire la vie de votre adversaire à 0 en vous aidant des monstres
        mis à votre disposition dans votre deck de 20 cartes tirées aléatoirement
        dans un pool de 150 cartes disponibles</p>
        <p>
        Vous avez droit à 3 actions par tour:
          Vous pouvez piocher une carte
          Vous pouvez attaquer les cartes adverses
            si votre monstre à moins d'attaque que celui de l'adversaire il s'auto détruira
            si votre monstre à le même niveau d'attaque que le montre adverse les deux seront détruites
            si votre monstre a plus d'attaque il détruit le monstre adverse.
          Une carte posée à un tour ne peux attaquer qu'au tour suivant.
          Si votre adversaire n'a pas de monstre sur le plateau vous pourrez l'attaquer directement.
        </p>
        <p>
          Good Luck ! Have Fun !
        </p>
        </div>
        </body>
      </div>
    );
  }
}

export default Regles;
