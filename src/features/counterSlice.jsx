import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  count: 10,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByPayLoad: (state, { payload }) => {
      state.value += payload;
    },
    incrementByCount: (state) => {
      state.count += 1;
    },
    decrementByCount: (state) => {
      state.count -= 1;
    },
    incrementByPayLoadByCount: (state, { payload }) => {
      state.count += payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByPayLoad,
  incrementByCount,
  decrementByCount,
  incrementByPayLoadByCount,
} = counterSlice.actions;

export default counterSlice.reducer;
