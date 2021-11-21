import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fname: "Jay",
  lname: "Reiter",
  value: 9,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment(state, action) {
      state.value += 1;
    },
  },
});

export const { increment } = userSlice.actions;

export default userSlice.reducer;
