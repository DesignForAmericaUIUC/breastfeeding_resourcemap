const initialState = {
  fname: "Jay",
  lname: "Reiter",
  value: 9,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "user/increment": {
      return {
        ...state,
        value: state.value + 1,
      };
    }
    default:
      return state;
  }
}
