import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

// create Sliceis a API
const bonusSlice = createSlice({
  name: "bonus",
  initialState: { points: 0 },
  reducers: {
    increment: (state) => {
      state.points += 1;
    },
  },
});

export const { increment, decrement } = bonusSlice.actions;
export default bonusSlice.reducer;
