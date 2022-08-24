import React, { Component } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import cardData from "./data";

function App() {
  const Cards = cardData.map((card) => <Card key={card.id} item={card} />);
  return (
    <div>
      <Navbar />
      {/*  */}
      <Hero />
      <section className="cards-list">{Cards}</section>
    </div>
  );
}

export default App;
