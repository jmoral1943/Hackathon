import * as actionTypes from "./actions";

const initialState = {
  workouts: [],
  sport: "",
  type: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADWORKOUTS: 
      return {
        workouts: action.data
      }

    default:
      return state;
  }
};

export default reducer;
