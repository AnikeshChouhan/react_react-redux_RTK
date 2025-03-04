import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import { useState } from "react";
const App = () => {
  // pasted , from account components to here

  // here all code is react code that is introduce props drilling but its very danger to understand the code thatswhy we are naglet thing thing by using redux
  const [account, setAccount] = useState({ amount: 0 });
  const [bonus, setBonus] = useState({ points: 0 });

  const increment = () => {
    setAccount({ amount: account.amount + 1 });
  };
  const decrement = () => {
    setAccount({ amount: account.amount - 1 });
  };
  const incrementByAmounts = (value) => {
    setAccount({ amount: account.amount + value });
  };
  const incrementBonus = () => {
    setBonus({ points: bonus.points + 1 });
  };
  return (
    <div className="margin">
      <div className="color">
        <h4 className="lightpink">App</h4>
        <h3>Current Amount : {account.amount}</h3>
        <h3>Total Bonus : {bonus.points}</h3>
      </div>
      <div className="flex">
        {" "}
        <Account
          increment={increment}
          decrement={decrement}
          incrementByAmounts={incrementByAmounts}
          account={account}
        />
      </div>
      <div className="flex">
        {" "}
        <Bonus incrementBonus={incrementBonus} bonus={bonus} />
      </div>
    </div>
  );
};

export default App;
