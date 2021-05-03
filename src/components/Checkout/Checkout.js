import DecorPreview from "../DecorBuilder/DecorPreview/DecorPreview";
import CheckoutForm from "./CheckoutForm/CheckoutForm";


const Checkout = ({ history }) => {
  function cancelCallback() {
    history.replace('/');
  }

  return (
    <div>
  
  < DecorPreview butterflies={{
         firstButterfly : 5,
         secondButterfly : 5 ,
        thirdButterfly : 5 ,
        fourthButterfly : 5 ,
        fifthButterfly : 5 ,
        
        }} price={100} />
      <CheckoutForm/>

    </div>
  );
}
 
export default Checkout;


