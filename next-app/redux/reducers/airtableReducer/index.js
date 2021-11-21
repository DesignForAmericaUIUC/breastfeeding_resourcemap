const initialState = {
  data: [],
};

export default function airtableReducer(state = initialState, action) {
  switch (action.type) {
    case "user/clearData": {
      return {
        ...state,
        data: [],
      };
    }
    default:
      return state;
  }
}
