import classes from "./CheckoutSummary.module.css";
import Button from "../../Ul/Button/Button";
import DecorPreview from "../../DecorBuilder/DecorPreview/DecorPreview";

const CheckoutSummary = ({ cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        < DecorPreview butterflies={{
         blueButterfly : 5,
         purpleButterfly : 5,
         pinkButterfly : 5,
        }} price={100} />
      </div>
      <div>
        <Button>Checkout</Button>
        <Button onClick={cancelCallback}>Cancel</Button>
      </div>
    </div>
  );
}
 
export default CheckoutSummary;