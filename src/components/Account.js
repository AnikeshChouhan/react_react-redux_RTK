import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  getUserAccount,
  increment,
  incrementByAmount,
} from "../slices/accountSlice";

const Account = () => {
  const [value, setValue] = useState(0);
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Account Component </h3>
      <h2>Amount : {account.amount} </h2>
      <div className="flex">
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          decrement
        </button>
        <input
          type="number"
          onChange={(e) => {
            setValue(Number(e.target.value));
          }}
        />
        <button
          onClick={() => {
            dispatch(incrementByAmount(value));
          }}
        >
          Increment by {value}
        </button>

        <button
          onClick={() => {
            dispatch(getUserAccount(2));
          }}
        >
          init Account
        </button>
      </div>
    </div>
  );
};
export default Account;
