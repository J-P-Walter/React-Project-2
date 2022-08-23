function Card(props) {
  return (
    <div className="poppins-font card">
      <img
        className="card-img"
        src={require("../images/katie-zaferes.png")}
        alt="swimmer"
      />
      <div className="rating">
        <img className="star" src={require("../images/star.png")} alt="star" />
        <span>{props.rating} </span>
        <span>({props.reviewCount}) •</span>
        <span>{props.country}</span>
      </div>
      <p className="info">{props.title}</p>
      <p className="cost">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
export default Card;
