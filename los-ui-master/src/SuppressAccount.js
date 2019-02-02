import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import {SERVER_URL} from "./consts";
import "./game.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import App from "./App";
import {ls} from "local-storage";


class SuppressAccount extends Component {

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
	          "/users/unsubscribe?token=" +
	          this.props.location.state.token + 
	          "&hashPass=" +
	          this.state.password +
	          "&email=" +
	          this.state.email 
	      )
	      .then(res => {
	        if (res.data.status === "ok") {
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

	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
		              Mail :{" "}
		              <input
		                type="text"
		                id = "email"
		                placeholder = "Entrez votre Login"
		                value={this.state.email}
		                onChange={this.handleChangeEmail}
		              /><br />
		            </label>
		            <label>
		              Mot de passe :{" "}
		              <input
		                type="text"
		                id = "password"
		                placeholder = "Entrez votre Login"
		                value={this.state.password}
		                onChange={this.handleChangePassword}
		              /><br />
		            </label>
		            <label>
		              <input type="submit" value="Supprimer son compte" />
		            </label>
				</form>
			</div>
		);
	}
}

export default SuppressAccount;