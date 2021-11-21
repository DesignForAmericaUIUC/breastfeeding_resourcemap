import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const axios = require("axios").default;

const app_id = "appYWfvp0fetSB56R";
const view = "table1";
const app_key = "REDACTED";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchData = createAsyncThunk("airtable/fetchData", async () => {
  const airtableRecords = [];
  fetch(`https://api.airtable.com/v0/${app_id}/${view}?api_key=${app_key}`)
    .then((response) => response.json())
    .then((data) => {
      airtableRecords.concat(data.records);
      console.log(data.records);
    })
    .catch((error) => {
      console.log(error);
    });
  return airtableRecords;
});

export const addData = createAsyncThunk(
  "airtable/postNewData",
  async (initialPost) => {
    //   const response = await axios
    //     .post(url, data)
    //     .then((resp) => console.log(resp))
    //     .catch((error) => console.log(error));

    //   return response.data;
    return [];
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
        state.data = state.data.concat(action.payload);
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

// export const { addData, fetchData } = airtableSlice.actions;

export default airtableSlice.reducer;

export const selectAllEntries = (state) => state.data;
