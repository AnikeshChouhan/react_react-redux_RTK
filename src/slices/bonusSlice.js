import { createAction, createSlice } from "@reduxjs/toolkit";

const incByAmount = createAction("account/incrementByAmount");

// create Sliceis a API
const bonusSlice = createSlice({
  name: "bonus",
  initialState: { points: 0 },
  reducers: {
    // here we are using immer library
    increment: (state) => {
      state.points++;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incByAmount, (state, action) => {
      if (action.payload >= 100) {
        state.points++;
      }
    });
  },
});

export const { increment, decrement } = bonusSlice.actions;
export default bonusSlice.reducer;
