import React, {Component} from "react";
import "./App.css";
import {Link} from "react-router-dom";
import Axios from "axios";
import {SERVER_URL} from "./consts";
import "./game.css";
import logo from "./logo.png";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: this.props.token,
            matchmaking : [],
            requete : [],
            participer : [],
            listeJoueurs :[]
        };
        this.matchGetAll();
        this.deconnexion = this.deconnexion.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.accountSupr = this.accountSupr.bind(this);
    }

    accountSupr(e){
        e.preventDefault();
        Axios
            .get(SERVER_URL + "/users/unsubscribe?email=" + this.state.email +
                "&password=" + this.state.passw
            ).then(res=>{
                if (res.data.status === "ok"){
                    this.props.history.push(process.env.PUBLIC_URL + "/signin");
                }
        } );

    }

    deconnexion(e) {
        e.preventDefault();
        Axios
            .get(
                SERVER_URL + "/users/disconnect?token=" + this.state.token
            )
            .then(res => {
                if (res.data.status === "ok") {
                    this.props.supSession();
                    this.props.history.push(process.env.PUBLIC_URL);
                }
            });
    }

    /*Recupe les matchs*/ /*FONCTIONNE YOUPI*/
    matchGetAll(){
      console.log("MatchGetAll")
      Axios.get(
        SERVER_URL + "/matchmaking/getAll?token=" + this.state.token
      )
      .then(res => {
          this.setState({listeJoueurs: res.data.data});
          this.props.history.push(process.env.PUBLIC_URL + "/");

      });
      console.log(this.state.listeJoueurs);
    }

    /*Participer a un match*/
    participer(){
      console.log("liste des requetes");
      Axios
        .get(
        SERVER_URL + "/matchmaking/participate?token=" + this.state.token
      )
      .then(res => {
        console.log(res.data.data.matchmakingId);
        this.setState({matchmaking:res.data.data});
          this.props.history.push(process.env.PUBLIC_URL + "/");

      });

    }

    unparticipate(){
      console.log("ne participe plus")
      Axios
        .get(
        SERVER_URL + "/matchmaking/unparticipate?token=" + this.state.token
      )
      .then(res => {
        this.setState({matchmaking:res.data.data});
          this.props.history.push(process.env.PUBLIC_URL + "/");

      });
    }

    /*Refresh les demandes de parties*/
    request(){
      console.log("request")
      Axios.get(
        SERVER_URL + "/matchmaking/request?matchmakingId=" + this.state.listeJoueurs[0].matchmakingId +"&token=" + this.state.token
      )
      .then(res => {
        this.props.history.push(process.env.PUBLIC_URL + "/");
      });
      console.log(this.state.listeJoueurs)
    }

    /*Accepte la request*/
    acceptRequest(){
      console.log("AcceptRequest")
      Axios.get(
        SERVER_URL + "/matchmaking/acceptRequest?matchmakingId=" + this.state.listeJoueurs[0].matchmakingId + "&token=" + this.state.token
      )
      .then(res => {
        console.log("res du accept request");
        console.log(res);
        this.props.history.push({
          state :{J1 : res.data.player1,
              J2 : res.data.player2,
              token : this.state.token}
        })
      });
    }

    handleShow() {
      var x = document.getElementById("ModalF");
      if (x.style.display === "none") {
        x.style.display = "grid";
      } else {
        x.style.display = "none";
        this.unparticipate();
      }
    }

    jouer(){
      console.log("Jouer")
      this.handleShow();
      this.participer();
      if(this.state.listeJoueurs[0] != null) {
        console.log("Demande envoyer")
        this.request();
        this.participer();
      }else {
        console.log("Attendre demande")
      }
    }

  render() {
    return (
      <div id="accueil">
        <header>
          <img id="logo" src={logo} alt="logo" />
        </header>
        <body>
          <div id="milieu">
            <div id="pla">
              <button className="bla" onClick={()=> this.jouer()}>Participer</button>
              <Link to={{pathname:"Board", test:{...this.state}}}><input className="bla" type="submit" value="Jouer!" /></Link>
              <Link to="Signin" onClick={()=> this.deconnexion}><input className="bla" type="submit" value="Deconnexion" /></Link>
              <Link to={{pathname:"SuppressAccount", state:{...this.state}}} ><input className="bla" type="submit" value="Supprimer compte" /></Link>
              <Link to="Regles" test={this.state.token}><input className="bla" type="submit" value="Règles du jeu" /></Link>

                <div id="ModalF"
                  style={{
                    position: 'absolute',
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 20,
                    background: '#fff',
                    borderRadius: '2px',
                    display: 'none',
                    minHeight: '300px',
                    margin: '1rem',
                    minWidth: '300px',
                    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
                    justifySelf: 'center'
                  }}
                >

                <button className="bla" onClick={()=> this.handleShow()}>Abandonner demande</button>
                <button className="bla" onClick={()=> this.acceptRequest()}>AcceptRequest</button>

                </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default Game;
