import classes from "./DecorBuilder.module.css";
import DecorPreview from "./DecorPreview/DecorPreview";
import DecorControls from "./DecorControls/DecorControls";
import { useEffect, useState } from "react";
import axios from "../../axios";
import Modal from "../Ul/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../Ul/Button/Button";
import {useDispatch , useSelector } from "react-redux";
import { load } from "../../store/actions/builder";
import withAxios from "../withAxios";

const DecorBuilder = ({history}) => {
  const dispatch = useDispatch();
  const butterflies = useSelector(state => state.builder.butterflies);
  const price = useSelector(state => state.builder.price);
  const [ordering, setOrdering] = useState(false);


  // useEffect(loadDefaults, []);

  // function loadDefaults() {
  //    axios
  //     .get('https://builder-c1f06-default-rtdb.firebaseio.com/default.json')
  //     .then(response => {
  //       setPrice(response.data.price);
  //       setButterflies(response.data.butterflies);
  //     }) 
  //   }


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
  } ; 

  return (<div className={classes.DecorBuilder}>
    <DecorPreview  
    butterflies={butterflies} 
    price={price} />
    <DecorControls
      butterflies={butterflies}
      startOrdering={startOrdering}/>
     <Modal 
     show={ordering}
     cancel={stopOrdering}>

<OrderSummary
            butterflies={butterflies}
            price={price}/>
          <Button onClick={finishOrdering} purple>Checkout</Button>
          <Button onClick={stopOrdering}>Cancel</Button>
     </Modal>
  </div>
  );
}

export default withAxios(DecorBuilder, axios);

