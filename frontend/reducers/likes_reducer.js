import {
  RECEIVE_LIKES,
  RECEIVE_LIKE,
  REMOVE_LIKE,
} from '../actions/like_actions';
import merge from 'lodash/merge';

const LikesReducer = (oldState = [], action) => {
  // debugger
  // Object.freeze(oldState);
  let newState = merge([], oldState);
  switch (action.type) {
    case RECEIVE_LIKES:
      // debugger
      return action.likes
    case RECEIVE_LIKE:
      // debugger
      return merge([], oldState, { [action.like.printId]: action.like.userId });
    case REMOVE_LIKE:
      // debugger
      delete newState[action.print.id];
      return newState;
    default:
      return newState;
  }
};

export default LikesReducer;
