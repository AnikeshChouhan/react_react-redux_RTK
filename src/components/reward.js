import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByAmount } from "../reducers/reward";

const Reward = () => {
  const points = useSelector((state) => state.reward);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Reward Component </h3>
      <h2>Total Point : {points.points} </h2>
      <div className="flex">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          Increment
        </button>
      </div>
    </div>
  );
};
export default Reward;
