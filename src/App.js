import React, { Component } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/*  */}
        <Hero />
        <Card />
      </div>
    );
  }
}

export default App;
