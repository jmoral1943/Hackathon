import * as actionTypes from "./actions";

const initialState = {
  workouts: [],
  sport: "",
  type: "",
  categories: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADWORKOUTS:
      return {
        ...state,
        workouts: action.data
      };
    case actionTypes.LOADSPORT:
      return {
        ...state,
        sport: action.data
      };
    case actionTypes.LOADTYPE:
      return {
        ...state,
        type: action.data
      };
    case actionTypes.LOADCATEGORY:
      return {
        ...state,
        categories: action.data
      }
    default:
      return state;
  }
};

export default reducer;
