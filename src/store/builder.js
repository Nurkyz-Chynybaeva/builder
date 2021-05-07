import {ADD_BUTTERFLY, REMOVE_BUTTERFLY, SET_BUTTERFLY} from "./actions/types";
const initialState = {
    butterflies : {
    },
  price : 0
};
  const prices = {
    blueButterfly : 0.5,
    coralButterfly : .3 ,
   purpleButterfly : .4 ,
   whiteButterfly : .5 ,
   yelloButterfly : .6 ,
  };
  
  const builder = (state = initialState, action) => {
    const newState = { ...state };
  
    switch (action.type) {
      case "ADD_BUTTERFLY":
        newState.butterflies[action.butterfly]++;
        newState.price += prices[action.butterfly];
        break;
      case "REMOVE_BUTTERFLY":
        newState.butterflies[action.buttterfly]--;
        newState.price -= prices[action.butterfly];
        break;
        case "SET_BUTTERFLY":
          newState.butterflies = action.data.butterflies;
      newState.price = action.data.price;
    
      default:
        break;
    }
  
    return newState;
  }
  
  export default builder;

