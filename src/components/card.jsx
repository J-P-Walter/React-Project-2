function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
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
      <img
        className="card-img"
        src={props.item.coverImg}
        alt={props.item.coverImg}
      />
      <div className="rating">
        <img className="star" src={require("../images/star.png")} alt="star" />
        <span>{props.item.stats.rating} </span>
        <span>({props.item.stats.reviewCount}) •</span>
        <span>{props.item.location}</span>
      </div>
      <p className="info">{props.item.title}</p>
      <p className="cost">
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}
export default Card;
