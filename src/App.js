import { useDispatch, useSelector } from "react-redux";
import { refresher } from "./actions";
import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import Reward from "./components/reward";
const App = () => {
  const account = useSelector((state) => state.account);
  const bonus = useSelector((state) => state.bonus);
  const dispatch = useDispatch();
  return (
    <div className="margin">
      <div className="color">
        <h4 className="lightpink">App</h4>
        {account.pending ? (
          <p>LOADING........</p>
        ) : account.error ? (
          <p>{account.error}</p>
        ) : (
          <h3>Current Amount : {account.amount}</h3>
        )}
        <h3>Total Bonus : {bonus.points}</h3>
      </div>
      <div className="flex">
        {" "}
        <Account />
      </div>
      <div className="flex">
        {" "}
        <Bonus />
      </div>
      <div className="flex">
        {" "}
        <Reward />
      </div>
      <button onClick={() => dispatch(refresher())}>Refresh</button>
    </div>
  );
};

export default App;
