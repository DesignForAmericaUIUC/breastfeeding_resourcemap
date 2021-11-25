import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showBanner: true,
  fetchedAirtableData: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleShowBanner(state, action) {
      state.showBanner = !state.showBanner;
    },
    didFetchAirtableData(state, action) {
      state.fetchedAirtableData = true;
    },
  },
});

export const { increment } = userSlice.actions;

export default userSlice.reducer;
