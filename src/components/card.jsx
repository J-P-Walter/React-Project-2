function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="poppins-font card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
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
