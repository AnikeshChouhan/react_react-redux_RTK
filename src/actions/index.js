import axios from "axios";
export const INIT = "account/init";
export const INCBYONE = "account/increment";
export const DECBYONE = "account/decrement";
export const INCBYAMT = "account/incrementByAmount";
export const DECBYAMT = "account/decrementByAmount";
export const GET_ACC_USER_PENDING = "account/getUser/pending";
export const GET_ACC_USER_FULFILED = "account/getUser/fulfilled";
export const GET_ACC_USER_REJECTED = "account/getUser/rejected";
export const INCBONUS = "bonus/increment";
export const REFRESH = "refresh/dataRefresh";
// Action creators and its return an Action
export function initUser(value) {
  return { type: INIT, payload: value };
}
export function getAccountUserFulfild(value) {
  return { type: GET_ACC_USER_FULFILED, payload: value };
}
export function getAccountUserRejected(error) {
  return { type: GET_ACC_USER_REJECTED, error: error };
}
export function getAccountUserPending() {
  return { type: GET_ACC_USER_PENDING };
}
export const increment = () => {
  return { type: INCBYONE };
};
export const decrement = () => {
  return { type: DECBYONE };
};
export const incrementByAmount = (value) => {
  return { type: INCBYAMT, payload: value };
};
export const incrementBonus = () => {
  return { type: INCBONUS };
};
export const refresher = () => {
  return { type: REFRESH };
};

// it is called thunk function beacause its proform async operation
//  it is also a action creater but different because its return a async function with new facility
// its not return a simple action like  { type: 'increment'}
export function getUserAccount(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(getAccountUserPending());
      const response = await axios.get(`http://localhost:3000/account/${id}`);
      // const response = await axios.get(
      //   `https://jsonplaceholder.typicode.com/users`
      // );
      // console.log(response.data);
      dispatch(getAccountUserFulfild(response.data.amount));
    } catch (error) {
      dispatch(getAccountUserRejected(error.message));
    }
  };
}
