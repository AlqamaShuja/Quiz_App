import * as actionTypes from "../actions/actionTypes";
import questions from "../Questions";

const initialState = {
  ques: questions[0],
  count: 0,
  length: questions.length,
  score: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NEXT_QUESTION:
      return {
        ...state,
        ques: questions[state.count + 1],
        count: state.count + 1,
        score: state.score + action.score
      };
    case actionTypes.INIT_QUESTION:
      return {
        ...state,
        ques: questions[0],
        count: 0,
        score: 0
      };
    default:
      return state;
  }
};

export default reducer;
