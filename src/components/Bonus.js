import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementBonus } from "../actions";
const Bonus = () => {
  const bonus = useSelector((state) => state.bonus);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Bonus Component </h3>
      <h2>Total Point : {bonus.points} </h2>
      <div className="flex">
        <button onClick={() => dispatch(incrementBonus())}>Increment</button>
      </div>
    </div>
  );
};
export default Bonus;
