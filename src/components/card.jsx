import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div>
        <img
          className="card"
          src={require("../images/katie-zaferes.png")}
          alt="swimmer"
        />
      </div>
    );
  }
}
export default Card;
