import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./signin.css";
import { SERVER_URL } from "./consts";

import "./App.css";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .get(
        SERVER_URL +
          "/users/connect?email=" +
          this.state.email +
          "&password=" +
          this.state.password
      )
      .then(res => {
        if (res.data.status === "ok") {
          this.props.setSessionToken(res.data.token);
          this.props.history.push(process.env.PUBLIC_URL + "/");
        }
      });
  }
  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  handleChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div id="accueil">
      <header>
        <h1>League of Stones</h1>
      < h3>Version UT2J</h3>
      </header>
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              <input
                type="text"
                id = "mdp"
                placeholder = "Entrez votre Login"
                value={this.state.email}
                onChange={this.handleChangeEmail}
              /><br />
            </label>
          </div>
          <div>
            <label>
              <input
                type="password"
                id="mdp"
                placeholder = "Entrez votre mot de passe"
                value={this.state.password}
                onChange={this.handleChangePassword}
              />
            </label>
          </div>
          <div id="valider">
            <label>
              <input type="submit" value="Se connecter" />
              <Link to="/signup"><input id="bouton" type="submit" value="Créer un compte" /></Link>
            </label>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default Signin;
