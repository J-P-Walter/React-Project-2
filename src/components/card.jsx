function Card(props) {
  return (
    <div className="poppins-font card">
      {/*<img
        className="card-img"
        src={require("../images/katie-zaferes.png")}
        alt="swimmer"
      />
  */}
      <img className="card-img" src={props.coverImg} alt={props.coverImg} />
      <div className="rating">
        <img className="star" src={require("../images/star.png")} alt="star" />
        <span>{props.rating} </span>
        <span>({props.reviewCount}) •</span>
        <span>{props.location}</span>
      </div>
      <p className="info">{props.title}</p>
      <p className="cost">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
export default Card;
