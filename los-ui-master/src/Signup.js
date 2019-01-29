import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import { SERVER_URL } from "./consts";
import "./signup.css";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: ""
    };
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(
      this
    );
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeLogin(e) {
    this.setState({ login: e.target.value });
  }
  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  handleChangePassword(e) {
    this.setState({ password: e.target.value });
  }
  handleChangeConfirmPassword(e) {
    this.setState({ confirmPassword: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.setState({ error: "Les deux mots de passe ne correspondent pas" });
      return;
    }
    let url =
      SERVER_URL +
      "/users/subscribe?email=" +
      email +
      "&password=" +
      password +
      "&name=" +
      this.state.login;
    axios.get(url).then(res => {
      let data = res.data;
      if (data.status === "ok") {
        this.props.history.push(process.env.PUBLIC_URL + "/");
      } else {
        this.setState({ error: "Une erreur s'est produite : " + data.message });
      }
    });
  }
  render() {
    return (
      <div id="acc">
        <header>
          <img id="logo" src={logo} alt="logo" />
        </header>
        <form id="regle" onSubmit={this.handleSubmit}>
          <div>{this.state.error}</div>
          <div id="text">Inscrivez-vous :</div>
          <label>
            <input id="pwd"
              placeholder = "Pseudo"
              type="text"
              value={this.state.login}
              onChange={this.handleChangeLogin}
            />
          </label>
          <label>
            <input id="pwd"
              placeholder = "E-mail"
              type="text"
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
          </label>
          <label>
            <input id="pwd"
              placeholder = "Mot de passe"
              type="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </label>
          <label>
            <input id="pwd"
              placeholder = "Confirmer mot de passe"
              type="password"
              value={this.state.confirmPassword}
              onChange={this.handleChangeConfirmPassword}
            />
          </label>
          <div id="val">
            <input id="bien" type="submit" value="S'inscrire" />
            <Link to="/signin"><input id="bout" type="submit" value="Se connecter" /></Link>
          </div>      
        </form>
      </div>
    );
  }
}

export default Signup;
