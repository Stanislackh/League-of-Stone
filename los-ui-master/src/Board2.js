import React, {Component} from "react";
import "./App.css";
import "./game.css";
import chat from "./chat.jpeg"

class Board2 extends Component {
    constructor(props) {
		super(props);
		this.state = {
            cartes :[
                {
                    id:"50",
                    img:"toto.jpeg"
                },
                {
                    id:"12",
                    img:"toto.jpeg"
                },
                {
                    id:"24",
                    img:"toto.jpeg"
                },
                {
                    id:"32",
                    img:"toto.jpeg"
                },
                {
                    id:"2",
                    img:"toto.jpeg"
                },
            ],
            positions: [{id:10},{id:20},{id:30},{id:40},{id:50}]
            ,
            val0:"0",
            val1:0,
            val2:0,
            val3:0,
            val4:0,
            
		};
    }
    handleCardClicked(event){
        //if(this.state.positions[0].etat="empty"){
            const destHTMLElement = document.getElementById(10);
            const rect = destHTMLElement.getBoundingClientRect();
            event.target.style.position = "absolute";
            event.target.style.left = rect.left +"px";
            event.target.style.margin = "0px";
            event.target.style.top = rect.top +"px";
            event.target.style.width = rect.width +"px";
            event.target.style.height = rect.height +"px";}
        //this.state.currentPosition = this.getNextEmptyPosition()
    //}
    /*getNextEmptyPosition(){
        /*let i=this.state.currentPosition;
        while (this.state.position[i]!="" && i%5 != this.state.currentPosition) {
            i++;
        }
        return i;
        for(let e=0; e<=4;e++){
            if (this.state.positions[e].etat!="full"){
                return this.state.positions[e].id};

        }
}*/
    render(){
        return (                   
        <div id="page">
                <div id="plateau">
                                      
                    <div id="jeujoueur">

                        <div className="pose" id={this.state.positions[0].id}>
                        </div>
                        <div className="pose" id={this.state.positions[1].id}>
                        </div>
                        <div className="pose" id={this.state.positions[2].id}>
                        </div>
                        <div className="pose" id={this.state.positions[3].id}>
                        </div>
                        <div className="pose" id={this.state.positions[4].id}>
                        </div>
                    </div>
                </div>
                <div id="joueur">
                    <div id="defjoueur">                        
                    </div>
                    <div id="cartesjoueur">
		                <img id={this.state.cartes[0].id}  onClick={this.handleCardClicked} className="card" src={chat}/>
                    </div>
                    <div id="cartesjoueur">
		                <img id={this.state.cartes[1].id}  onClick={this.handleCardClicked} className="card" src={chat}/>
                    </div>
                    <div id="cartesjoueur">
		                <img id={this.state.cartes[2].id}  onClick={this.handleCardClicked} className="card" src={chat}/>
                    </div>
                    <div id="cartesjoueur">
		                <img id={this.state.cartes[3].id}  onClick={this.handleCardClicked} className="card" src={chat}/>
                    </div>
                    <div id="cartesjoueur">
		                <img id={this.state.cartes[4].id}  onClick={this.handleCardClicked} className="card" src={chat}/>
                    </div>

                </div>
            </div>
        );
    }
}
export default Board2;