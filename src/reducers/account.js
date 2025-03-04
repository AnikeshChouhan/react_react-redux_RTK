import {
  GET_ACC_USER_FULFILED,
  GET_ACC_USER_PENDING,
  GET_ACC_USER_REJECTED,
  INIT,
  INCBYONE,
  INCBYAMT,
  DECBYONE,
  DECBYAMT,
} from "../actions";
//reducers
export function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case GET_ACC_USER_FULFILED:
      return { amount: action.payload, pending: false };
    case GET_ACC_USER_REJECTED:
      return { ...state, error: action.error, pending: false };
    case GET_ACC_USER_PENDING:
      return { ...state, pending: true };

    case INIT:
      return { amount: action.payload };

    case INCBYONE:
      //mutability
      // state.amount = state.amount + action.payload;
      //  return state;.

      //immutability
      return { amount: state.amount + 1 };

    case DECBYONE:
      //immutability
      return { amount: state.amount - 1 };

    case INCBYAMT:
      //immutability
      return { amount: state.amount + action.payload };

    case DECBYAMT:
      //immutability
      return { amount: state.amount - action.payload };

    default:
      return state;
  }
}
