import DecorPreview from "../DecorBuilder/DecorPreview/DecorPreview";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import classes from "./Checkout.module.css";

const Checkout = ({ history }) => {
  function cancelCallback() {
    history.replace('/');
  }

  return (
    <div  className={classes.Checkout}>
  
  < DecorPreview butterflies={{
         firstButterfly : 5,
         secondButterfly : 5 ,
        thirdButterfly : 5 ,
        fourthButterfly : 5 ,
        fifthButterfly : 5 ,
        
        }} price={100} />
      <CheckoutForm
      cancelCallback = {cancelCallback}
      submitCallback = {submitCallback}/>

    </div>
  );
}
 
export default Checkout;


