// reducers.js
import { REFRESH } from "../actions";

// const initialState = {
//   amount: 1,
//   lastUpdated: new Date().toLocaleTimeString(), // Track last refresh time
// };

const dataReducer = (state = { amount: 1 }, action) => {
  switch (action.type) {
    case REFRESH:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default dataReducer;
