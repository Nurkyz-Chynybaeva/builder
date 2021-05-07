import DecorPreview from "../DecorBuilder/DecorPreview/DecorPreview";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import classes from "./Checkout.module.css";
import axios from "axios";
import { useSelector } from "react-redux";

const Checkout = ({ history }) => {
  const butterflies = useSelector(state => state.builder.butterflies);
  const price = useSelector(state => state.builder.price);

  function cancelCallback() {
    history.replace('/');
  }

  function submitCallback(event) {
    const data = new FormData(event.target);

    axios.post('https://builder-c1f06-default-rtdb.firebaseio.com/orders.json', {
      name: data.get('name'),
      address: data.get('address'),
      phone: data.get('phone'),
      butterflies: butterflies, 
      price :price, 
  }).then(response => {
      history.replace('/');
    });

    event.preventDefault();
  }

  return (
    <div  className={classes.Checkout}>
  
  < DecorPreview butterflies={butterflies} price={price} />
      <CheckoutForm
      cancelCallback = {cancelCallback}
      submitCallback = {submitCallback}/>

    </div>
  );
}
 
export default Checkout;


