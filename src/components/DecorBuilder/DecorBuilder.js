import classes from "./DecorBuilder.module.css";
import DecorPreview from "./DecorPreview/DecorPreview";
import DecorControls from "./DecorControls/DecorControls";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../Ul/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../Ul/Button/Button";

const DecorBuilder = (history) => {
  const prices = {
   firstButterfly : 5, 
   secondButterfly : 5 ,
   thirdButterfly : 5 ,
   fourthButterfly : 5 ,
   fifthButterfly : 5 ,

  };

  const [butterflies, setButterflies] = useState({});
  const [price, setPrice] = useState(0);
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


  function addButterfly(type) {
    const newButterflies = { ...butterflies };
    newButterflies[type]++;
    // setPrice(price + prices[type]);
    // setButterflies(newButterflies);
  }

  function removeButterfly(type) {
    if (butterflies[type]) {
      const newButterflies = { ...butterflies };
      newButterflies[type]--; 
      //  setPrice(price - prices[type])
      // setButterflies(newButterflies);
    }
  }

  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }

  
  function finishOrdering() {
    axios
      .post('https://builder-c1f06-default-rtdb.firebaseio.com/orders.json', {
       butterflies: butterflies,
        price: price,
        address: "1234 Jusaeva str",
        phone: "0 777 777 777",
        name: "Sadyr Japarov",
      })
      .then(() => {
        setOrdering(false);
        // loadDefaults();
        

        history.push('/checkout');
      });
  }

  return (<div className={classes.DecorBuilder}>
    <DecorPreview 
    price={price} 
    butterflies={butterflies} />

    <DecorControls
      butterflies={butterflies}
      addButterfly={addButterfly}
      removeButterfly={removeButterfly}
      startOrdering={startOrdering}
    />
     <Modal 
     show={ordering}
     cancel={stopOrdering}>

<OrderSummary
            butterflies={butterflies}
            price={price}
            />
          <Button onClick={finishOrdering} green>Checkout</Button>
          <Button onClick={stopOrdering}>Cancel</Button>

     </Modal>
  </div>
  );
}

export default DecorBuilder;

