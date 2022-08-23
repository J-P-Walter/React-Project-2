import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="poppins-font card">
        <img
          className="card-img"
          src={require("../images/katie-zaferes.png")}
          alt="swimmer"
        />
        <div className="rating">
          <img
            className="star"
            src={require("../images/star.png")}
            alt="star"
          />
          <span>5.0 </span>
          <span>(6) •</span>
          <span>USA</span>
        </div>
        <p className="info">Life lessons with Katie Zaferes</p>
        <p className="cost">
          <span className="bold">From $136</span> / person
        </p>
      </div>
    );
  }
}
export default Card;
