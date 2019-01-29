import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import "./game.css";
import logo from "./logo.png";
import * as jquery from "jquery";
import "jquery-ui-dist/jquery-ui";
import $ from "jquery";
function allowDrop(ev) {
    ev.preventDefault();
  }
  
function drag(ev) {
    ev.dataTransfer.setData("image/svg+xml", ev.target.class);
  }
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("image/svg+xml");
    ev.target.appendChild(document.getElementByClassName(data));
  }

class Board extends Component {
    allowDrop(ev) {
        ev.preventDefault();
      }
      
    drag(ev) {
        ev.dataTransfer.setData("image/svg+xml", ev.target.class);
      }
      
    drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("image/svg+xml");
        ev.target.appendChild(document.getElementByClassName(data));
      }
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
                        <div className="pose" ondrop={drop(event)} ondragover={allowDrop(event)}>
                        </div>
                    </div>
                </div>
                <div id="joueur">
                    <div id="defjoueur">                        
                    </div>
                    <div id="cartesjoueur">
                        <object draggable="true" class="card" clickon={(event)=>this.handleClick(event)} type="image/svg+xml" data="demo.svg">🂠</object>
		                <object class="card" type="image/svg+xml" data="demo.svg">🂠</object>
		                <object class="card" type="image/svg+xml" data="demo.svg">🂠</object>
		                <object class="card" type="image/svg+xml" data="demo.svg">🂠</object>
		                <object class="card" type="image/svg+xml" data="demo.svg">🂠</object>
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