import {
  RECEIVE_ALL_PRINTS,
  RECEIVE_PRINT,
  REMOVE_PRINT,
} from '../actions/print_actions';
import {
  RECEIVE_LIKE,
  REMOVE_LIKE,
} from '../actions/like_actions'
import merge from 'lodash/merge';

const PrintsReducer = (oldState = {}, action) => {
  // debugger
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_ALL_PRINTS:
      // debugger
      return action.prints;
    case RECEIVE_PRINT:
      // debugger
      return merge({}, oldState, {[action.print.id]: action.print});
    case REMOVE_PRINT:
      newState[action.like.printId].user_likes
      for (let i = 0; i < newState[action.like.printId].user_likes.length; i++) {
        if (newState[action.like.printId].user_likes[i] === action.like.userId) {
          newState[action.like.printId].user_likes.splice(i,1)
        }
      }
      return newState;
    case RECEIVE_LIKE:
      // debugger
      newState[action.like.printId].user_likes.push(action.like.userId);
      return newState;
    case REMOVE_LIKE:
      //print means like here... fix...~!
      // debugger
      for (let i = 0; i < newState[action.print.printId].user_likes.length; i++) {
        // debugger
        if (newState[action.print.printId].user_likes[i] === action.print.userId) {
          // debugger
          newState[action.print.printId].user_likes.splice(i, 1)
          // debugger
        }
      }
      return newState;
    default:
      return newState;
  }
};

export default PrintsReducer;
