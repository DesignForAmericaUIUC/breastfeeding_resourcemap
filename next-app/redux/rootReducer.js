import { combineReducers } from "redux";

import userReducer from "./slices/userSlice";
import airtableReducer from "./slices/airtableSlice";

const rootReducer = combineReducers({
  user: userReducer,
  airtable: airtableReducer,
});

export default rootReducer;
