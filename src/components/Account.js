import React from "react";

const Account = ({
  store,
  increment,
  decrement,
  incrementByAmount,
  account,
}) => {
  // we are not directly pass thing state to parents components thats why i will copy this state and put in app mudule (where is my app componenets ) because its parents of all components

  // const [account, setAccount] = useState({ amount: 0 });
  // const [value, setvalue] = useState(0);
  // const increment = () => {
  //   setAccount({ amount: account.amount + 1 });
  // };
  // const decrement = () => {
  //   setAccount({ amount: account.amount - 1 });
  // };
  // const incrementByAmounts = (value) => {
  //   setAccount({ amount: account.amount + value });
  // };
  return (
    <div>
      <h3>Account Component </h3>
      <h2>Amount : {account.amount} </h2>
      <div className="flex">
        <button
          onClick={() => {
            store.dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            store.dispatch(decrement());
          }}
        >
          decrement
        </button>
        <input type="" />
        <button
          o
          onClick={() => {
            store.dispatch(incrementByAmount());
          }}
        >
          Increment by 10{" "}
        </button>
      </div>
    </div>
  );
};
export default Account;
