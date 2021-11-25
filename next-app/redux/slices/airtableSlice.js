import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// require("dotenv").config();

const app_id = "appiCULsCusw7tgF7";
const view = "form-responses";
const app_key = process.env.REACT_APP_AIRTABLE_API_KEY;

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchData = createAsyncThunk("airtable/fetchData", async () => {
  const airtableRecords = [];
  await fetch(
    `https://api.airtable.com/v0/${app_id}/${view}?api_key=${app_key}`
  )
    .then((response) => response.json())
    .then((data) => {
      data.records.forEach((r) => {
        airtableRecords.push(r.fields);
      });
    })
    .catch((error) => {
      console.log(error);
    });
  return airtableRecords;
});

// @TODO: implement me
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
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
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

export default airtableSlice.reducer;

export const selectAllEntries = (state) => state.airtable.data;
