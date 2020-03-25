import * as actionTypes from "./actionTypes";

export const nextQuestion = score => {
  return {
    type: actionTypes.NEXT_QUESTION,
    score: score
  };
};

export const initQuestion = () => {
  return {
    type: actionTypes.INIT_QUESTION
  };
};
