import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <img
          src={require("../images/airbnb-logo.png")}
          alt="abnb-logo"
          height="50px"
        />
      </nav>
    );
  }
}

export default Navbar;
