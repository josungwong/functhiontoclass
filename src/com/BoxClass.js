import React, { Component } from "react";

export default class BoxClass extends Component {

    constructor(){
        super()
        this.result = ""
    }
  Result = () => {
    if (
      this.props.title === "Computer" &&
      this.props.result !== "" &&
      this.props.result !== "Tie"
    ) {
      this.result = this.props.result === "Win" ? "Lose" : "Win";
    } else {
        this.result = this.props.result;
    }
  };
  render() {
    this.Result()
    return (
      <div className={`box ${this.result}`}>
        <h1>{this.props.title}</h1>
        <img
          src={this.props.item && this.props.item.img}
          alt=""
          className="item-img"
        />
        <h2>{this.result}</h2>
      </div>
    );
  }
}
