import React, { Component } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import cardData from "./data";

function App() {
  const Cards = cardData.map((card) => (
    <Card
      key={card.id}
      title={card.title}
      description={card.description}
      price={card.price}
      coverImg={card.coverImg}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      location={card.location}
      openSpots={card.openSpots}
    />
  ));
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
