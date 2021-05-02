import { BUY_ICECREAM } from "./iceCreamTypes";
import { POP_ICECREAM } from "./iceCreamTypes";
const initialState = {
  numOfIceCream: 10,
  iceCreamArray: [10, 20, 30],
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    case POP_ICECREAM:
        let tempArray = state.iceCreamArray;
        tempArray.pop();
      return {
        ...state,
        iceCreamArray: [...tempArray],
      };

    default:
      return state;
  }
};

export default iceCreamReducer;
