import React from "react";
import { incrementBonus } from "../actions";
const Bonus = ({ store }) => {
  // we are not directly pass thing state to parents components thats why i will copy this state and put in app mudule (where is my app componenets ) because its parents of all components
  // const [bonus, setBonus] = useState({ points: 0 });
  // const increment = () => {
  //   setBonus({ points: bonus.points + 1 });
  // };
  return (
    <div>
      <h3>Bonus Component </h3>
      <h2>Total Point : {store.getState().bonus.points} </h2>
      <div className="flex">
        <button onClick={() => store.dispatch(incrementBonus())}>
          Increment
        </button>
      </div>
    </div>
  );
};
export default Bonus;
