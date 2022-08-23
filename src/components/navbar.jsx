import React, { Component } from "react";
function Navbar() {
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

export default Navbar;
