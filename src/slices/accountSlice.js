import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserAccount = createAsyncThunk(
  "account/getUser",
  async (userId, thunkAPI) => {
    // const response = await axios.get(`http://localhost:3000/account/${userId}`);
    // return response.data;
    const { data } = await axios.get(`http://localhost:8080/account/${userId}`);
    return data.amount;
  }
);

// create Slices a API
const accountSlice = createSlice({
  name: "account",
  initialState: { amount: 1 },
  reducers: {
    // here we are using immer library

    increment: (state) => {
      state.amount++;
    },
    // here we are using immer library

    decrement: (state) => {
      state.amount--;
    },
    // here we are using immer library

    incrementByAmount: (state, action) => {
      state.amount += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserAccount.fulfilled, (state, action) => {
        // immer library
        state.amount = action.payload;
        state.fulfilled = true;
        state.error = false;
        state.pending = false;
      })
      .addCase(getUserAccount.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getUserAccount.rejected, (state, action) => {
        state.error = true;
        state.message = action.error;
        state.pending = false;
      });
  },
});

export const { increment, decrement, incrementByAmount } = accountSlice.actions;
export default accountSlice.reducer;
