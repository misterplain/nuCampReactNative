import * as ActionTypes from "./ActionTypes";

export const comments = (state = { errMess: null, comments: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return { ...state, errMess: null, comments: action.payload };

    case ActionTypes.COMMENTS_FAILED:
      return { ...state, errMess: action.payload };

    case ActionTypes.ADD_COMMENT:
      //using concact method that lets us attach a new item to ened of array without mutating the original array, cannot use push, takes existing state and concats the new object, returns new state to redux store
      const comment = action.payload;
      comment.id = state.comments.length();
      // comment.id = 57
      return { ...state, comments: state.comments.concat(comment) };

    default:
      return state;
  }
};
