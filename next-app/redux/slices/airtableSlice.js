import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const axios = require("axios").default;

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchData = createAsyncThunk("airtable/fetchData", async () => {
  const response = await axios.get();
  return response.data;
});

export const addData = createAsyncThunk(
  "airtable/postNewData",
  async (initialPost) => {
    const response = await axios.post();
    return response.data;
  }
);

const airtableSlice = createSlice({
  name: "airtable",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addData.fulfilled, (state, action) => {
        state.data.push(action.payload);
      });
  },
});

export const { dataAdded } = airtableSlice.actions;

export default airtableSlice.reducer;

export const selectAllEntries = (state) => state.data;
