import * as actionTypes from "../actions/actionTypes";

const initialState = {
  result: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_RESULT:
      return {
        ...state,
        result: action.result
      };
    default:
      return state;
  }
};

export default reducer;
