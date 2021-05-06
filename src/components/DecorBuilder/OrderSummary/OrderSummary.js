  
import classes from "./OrderSummary.module.css";

const OrderSummary = ({ butterflies , price }) => {
  const labels = {
    firstButterfly : "first butterfly",
   secondButterfly : "second butterfly" ,
   thirdButterfly : "third butterfly",
   fourthButterfly : "fourth butterfly",
  fifthButterfly : "fifth butterfly",
  }

  
  const results = Object.keys(butterflies)
  .map(type => <li>{labels[type]} : {butterflies[type]}</li>)

  // const results = Object.keys(butterflies).map(type => <li>{labels[type]}:{butterflies[type]}</li>);

  return (
    <div className={classes.OrderSummary}>
      <h3>Order summary</h3>
      <ul>
        {results}
      </ul>
      <strong> Total price: {price.toFixed(1)} som</strong>
    </div>
  );
}

export default OrderSummary;