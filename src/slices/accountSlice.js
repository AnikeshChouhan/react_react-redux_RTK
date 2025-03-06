import { createSlice } from "@reduxjs/toolkit";
// create Slices a API
const accountSlice = createSlice({
  name: "account",
  initialState: { amount: 1 },
  reducers: {
    increment: (state) => {
      state.amount++;
    },
    decrement: (state) => {
      state.amount--;
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = accountSlice.actions;
export default accountSlice.reducer;
