



export default function IconsCard(props) {
  return (
    <div className="cardContainer"{props.children}>
      <div>
        <span className={props.style}>{props.icon}</span>
      </div>
      <h3>{props.feature}</h3>
    </div>
  );
}


