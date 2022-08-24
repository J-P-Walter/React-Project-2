function Hero() {
  return (
    <section>
      <img
        className="photo-grid"
        src={require("../images/photo-grid.png")}
        alt="grid"
      />
      <main>
        <h1 className="poppins-font main-title">Online Experiences</h1>
        <p className="poppins-font main-text">
          Join unique interactive activities led by one-of-a-kind hosts--all
          without leaving home.
        </p>
        <p>Pictures are broken :(</p>
      </main>
    </section>
  );
}

export default Hero;
