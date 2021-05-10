import DecorPreview from "./DecorPreview/DecorPreview";
import DecorControls from "./DecorControls/DecorControls";
import classes from "./DecorBuilder.module.css";
import { useEffect, useState } from "react";
import axios from "../../axios";
import Modal from "../Ul/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../Ul/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../store/actions/builder";
import withAxios from "../withAxios";

const DecorBuilder = ({ history }) => {
  const dispatch = useDispatch();
  const butterflies = useSelector(state => state.builder.butterflies);
  const price = useSelector(state => state.builder.price);
  const [ordering, setOrdering] = useState(false);

  useEffect(() => dispatch(load()), [dispatch]);

  // function loadDefaults() {
  //   axios
  //     .get('https://builder-a51d0-default-rtdb.firebaseio.com/default.json')
  //     .then(response => {
  //       setPrice(response.data.price);

  //       // For arrays
  //       // setIngredients(Object.values(response.data.ingredients));
  //       // For objects
  //       setIngredients(response.data.ingredients);
  //     });
  // }

  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }

  function finishOrdering() {
    setOrdering(false);
    // loadDefaults();
    history.push('/checkout');
  }

  return (
    <div className={classes.DecorBuilder}>
      <DecorPreview
        butterflies={butterflies}
        price={price} />
      <DecorControls
        butterflies={butterflies}
        startOrdering={startOrdering}
        />
      <Modal
        show={ordering}
        cancel={stopOrdering}>
          <OrderSummary
            butterflies={butterflies}
            price={price}
            />
          <Button onClick={finishOrdering} purple="purple">Checkout</Button>
          <Button onClick={stopOrdering}>Cancel</Button>
        </Modal>
    </div>
  );
}

export default withAxios(DecorBuilder, axios);