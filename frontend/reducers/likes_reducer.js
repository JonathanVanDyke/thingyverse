import {
  RECEIVE_LIKE,
  REMOVE_LIKE,
} from '../actions/like_actions';
import merge from 'lodash/merge';

const PrintsReducer = (oldState = {}, action) => {
  // debugger
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_LIKE:
      // debugger
      return merge({}, oldState, { [action.printId]: action.userId });
    case REMOVE_LIKE:
      // debugger
      delete newState[action.print.id];
      return newState;
    default:
      return newState;
  }
};

export default PrintsReducer;
