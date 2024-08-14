import React, { Component } from "react";
import './App.css';
import BoxClass from "./com/BoxClass"

const choice = {
    rock:{
      name:"rock",
      img:"https://m.media-amazon.com/images/I/51rOMX5z40L.jpg"
    },
    scissors:{
      name:"scissors",
      img:"https://m.media-amazon.com/images/I/810Tz4tXUyL.jpg"
    },
    paper:{
      name:"paper",
      img:"https://m.media-amazon.com/images/I/617B4LbYLnL._AC_UF894,1000_QL80_.jpg"
    }
  }

export default class AppClass extends Component {

    constructor(){
        super()
        this.state={
            userSelect:null,
            computerSelect:null,
            result:""
        }
    }
    
    play = (userChoice) => {
        let computerChoice = this.randomChoice()
        this.setState({userSelect:choice[userChoice],computerSelect:computerChoice,result:this.judgement(choice[userChoice],computerChoice)})
        
      }

    judgement = (user,cpu) => {
        if(user.name === cpu.name){
          return "Tie"
        }else if(user.name === "rock")return cpu.name === "scissors"?"Win":"Lose"
        else if(user.name === "scissors")return cpu.name === "paper"?"Win":"Lose"
        else if(user.name === "paper")return cpu.name === "rock"?"Win":"Lose"
      }

    randomChoice = () => {
        let itemArray = Object.keys(choice)
        let randomItem =Math.floor(Math.random()*itemArray.length)
        let final = itemArray[randomItem]
        return choice[final]
      }


  render() {
    return (
      <div>
        <div className="main">
          <BoxClass title="You" item={this.state.userSelect} result={this.state.result} />
          <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result} />
        </div>
        <div className="main">
          <button onClick={() => this.play("scissors")} className="buttons">
            가위
          </button>
          <button onClick={() => this.play("rock")} className="buttons">
            바위
          </button>
          <button onClick={() => this.play("paper")} className="buttons">
            보
          </button>
        </div>
      </div>
    );
  }
}
