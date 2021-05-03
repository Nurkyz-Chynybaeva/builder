import classes from "./Order.module.css";

const Order = ({ name, phone, address, butterflies, price }) => {
  const outputButterflies = Object.keys(butterflies)
    .map(butterfly => <em>{butterfly} - {butterflies[butterfly]}</em>);

  return (
    <div className={classes.Order}>
      <div>{name}, {phone}, {address}</div>
      <div>{outputButterflies}</div>
      <strong>{price}</strong>
    </div>
  );
}

export default Order;