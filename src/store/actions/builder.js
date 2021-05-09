
import axios from "axios";
import {ADD_BUTTERFLY , REMOVE_BUTTERFLY , SET_BUTTERFLIES} from "./types";

export const add = (butterfly) => ({
    type: ADD_BUTTERFLY, 
    butterfly: butterfly
});

export const remove = (butterfly) => ({
    type: REMOVE_BUTTERFLY, 
    butterfly: butterfly
});


export const set = (data) => ({
    type: SET_BUTTERFLIES, 
    data : data
});


export const load = () => {
    return (dispatch) => axios.get("https://builder-c1f06-default-rtdb.firebaseio.com/default.json")
      .then(response => dispatch(set(response.data)))
  };

  
  export const add = (ingredient) => ({
    type: ADD_INGREDIENT,
    ingredient: ingredient
  });
  
  export const remove = (ingredient) => ({
    type: REMOVE_INGREDIENT,
    ingredient: ingredient
  });
  
  export const set = (data) => ({
    type: SET_INGREDIENTS,
    data: data
  });
  
  export const load = () => {
    return (dispatch) => axios.get("/default.json")
      .then(response => dispatch(set(response.data)))
  };
