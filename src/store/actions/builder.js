
import axios from "axios";
import {ADD_BUTTERFLY , REMOVE_BUTTERFLY} from "./types";

export const add = (butterfly) => ({
    type: "ADD_BUTTERFLY", 
    butterfly: butterfly
});

export const remove = (butterfly) => ({
    type: "REMOVE_BUTTERFLY", 
    butterfly: butterfly
});


export const set = (butterfly) => ({
    type: "SET_BUTTERFLY", 
    data : data
});


export const load = () => {
    return (dispatch) => axios.get("https://builder-c1f06-default-rtdb.firebaseio.com/default.json")
      .then(response => dispatch(set(response.data)))
  };