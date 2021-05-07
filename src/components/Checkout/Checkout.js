import DecorPreview from "../DecorBuilder/DecorPreview/DecorPreview";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import classes from "./Checkout.module.css";
import axios from "axios";

const Checkout = ({ history }) => {
  function cancelCallback() {
    history.replace('/');
  }
  
  function submitCallback(event) {
    const data = new FormData(event.target);

    axios.post('https://builder-c1f06-default-rtdb.firebaseio.com/orders.json', {
      name: data.get('name'),
      address: data.get('address'),
      phone: data.get('phone'),
      butterflies: {
        blueButterfly : 5,
        coralButterfly : 5 ,
       purpleButterfly : 5 ,
       whiteButterfly : 5 ,
       yelloButterfly : 5 ,
        
      },
      price: 100,
    }).then(response => {
      history.replace('/');
    });

    event.preventDefault();
  }

  return (
    <div  className={classes.Checkout}>
  
  < DecorPreview butterflies={{
         blueButterfly : 5,
         coralButterfly : 5 ,
        purpleButterfly : 5 ,
        whiteButterfly : 5 ,
        yelloButterfly : 5 ,
        
        }} price={100} />
      <CheckoutForm
      cancelCallback = {cancelCallback}
      submitCallback = {submitCallback}/>

    </div>
  );
}
 
export default Checkout;


