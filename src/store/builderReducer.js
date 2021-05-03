
const initialState = {
    buttterflies : {
        firstButterfly : 5 ,
        secondButterfly : 5 ,
        thirdButterfly : 5 ,
        fourthButterfly : 5 ,
    },
  price : 200
};
  const prices = {
    firstButterfly : .2 ,
        secondButterfly : 0.5 ,
        thirdButterfly : 4 ,
        fourthButterfly : 2 ,
  };
  
  const builderReducer = (state = initialState, action) => {
    const newState = { ...state };
  
    switch (action.type) {
      case "ADD_INGREDIENT":
        newState.buttterflies[action.buttterfly]++;
        newState.price += prices[action.buttterfly];
        break;
      case "REMOVE_INGREDIENT":
        newState.buttterflies[action.buttterfly]--;
        newState.price -= prices[action.buttterfly];
        break;
    
      default:
        break;
    }
  
    return newState;
  }
  
  export default builderReducer;