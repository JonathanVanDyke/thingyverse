import {
  RECEIVE_LIKES,
  RECEIVE_LIKE,
  REMOVE_LIKE,
} from '../actions/like_actions';
import merge from 'lodash/merge';

const LikesReducer = (oldState = [], action) => {
  // debugger
  Object.freeze(oldState);
  let newState = merge([], oldState);
  switch (action.type) {
    case RECEIVE_LIKES:
      return action.likes
    case RECEIVE_LIKE:
      // debugger
      newState.push({ id: action.like.id, user_id: action.like.userId, print_id: action.like.printId });
      return newState
    case REMOVE_LIKE:
      // debugger
      // delete newState[action.print.id];
      for(let i = 0; i < newState.length; i++) {
        if (newState[i].id === action.print.id) {
          newState.splice(i,1)
        }
      }
      // debugger
      return [].concat(newState)
    default:
      return newState;
  }
};

export default LikesReducer;
