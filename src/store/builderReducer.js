
const initialState = {
    butterflies : {
        firstButterfly : 5 ,
        secondButterfly : 5 ,
        thirdButterfly : 5 ,
        fourthButterfly : 5 ,
        fifthButterfly : 5,
    },
  price : 200
};
  const prices = {
    firstButterfly : .2 ,
        secondButterfly : 0.5 ,
        thirdButterfly : 4 ,
        fourthButterfly : 2 ,
        fifthButterfly : 1,
  };
  
  const builderReducer = (state = initialState, action) => {
    const newState = { ...state };
  
    switch (action.type) {
      case "ADD_INGREDIENT":
        newState.butterflies[action.butterfly]++;
        newState.price += prices[action.butterfly];
        break;
      case "REMOVE_INGREDIENT":
        newState.butterflies[action.buttterfly]--;
        newState.price -= prices[action.butterfly];
        break;
    
      default:
        break;
    }
  
    return newState;
  }
  
  export default builderReducer;

