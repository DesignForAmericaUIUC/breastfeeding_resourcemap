import { combineReducers } from "redux";

import userReducer from "./userReducer";
import airtableReducer from "./airtableReducer";

const rootReducer = combineReducers({
  user: userReducer,
  airtable: airtableReducer,
});

export default rootReducer;
