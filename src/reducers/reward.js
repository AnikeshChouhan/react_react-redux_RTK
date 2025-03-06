import { createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction("reward/increment");
export const incrementByAmount = createAction("reward/incrementByAmount");
export const incByAmount = createAction("account/incrementByAmount");

const initialState = { points: 0 };

export const rewardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.points += 1;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.points += action.payload;
    })
    .addCase(incByAmount, (state, action) => {
      if (action.payload >= 100) {
        state.points++;
      }
    });
});
