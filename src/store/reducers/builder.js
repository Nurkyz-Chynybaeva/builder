import {ADD_BUTTERFLY, REMOVE_BUTTERFLY, SET_BUTTERFLIES} from "../actions/types";
const initialState = {
    butterflies : {
    },
  price : 0
};
  const prices = {
    blueButterfly : 0.5,
    coralButterfly : .3 ,
   purpleButterfly : .4 ,
   colorfulButterfly : .5 ,
   yelloButterfly : .6 ,
   darkBlueButterfly : 10,
   saturatedRedButterfly : 50,
  };
  
  const builder = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
      case ADD_BUTTERFLY:
        newState.butterflies[action.butterfly]++;
        newState.price += prices[action.butterfly];
        break;
      case REMOVE_BUTTERFLY:
        newState.butterflies[action.butterfly]--;
        newState.price -= prices[action.butterfly];
        break;
      case SET_BUTTERFLIES:
        return {...action.data};
    
      default:
        break;
    }
  
    return newState;
  }
  
  export default builder;

