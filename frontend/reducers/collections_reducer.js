import {
  RECEIVE_COLLECTIONS,
  RECEIVE_COLLECTION,
  REMOVE_COLLECTION,
} from '../actions/collection_actions';
import merge from 'lodash/merge';

const CollectionsReducer = (oldState = {}, action) => {
  // debugger
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_COLLECTIONS:
      // debugger
      return action.collections
    case RECEIVE_COLLECTION:
      debugger
      newState = merge({}, oldState, action.collection)
      debugger
      // newState.push({ id: action.like.id, user_id: action.like.userId, print_id: action.like.printId });
      return newState
    case REMOVE_COLLECTION:
      // debugger
      // delete newState[action.print.id];
      // for (let i = 0; i < newState.length; i++) {
      //   if (newState[i].id === action.print.id) {
      //     newState.splice(i, 1)
      //   }
      // }
      // debugger
      return [].concat(newState)
    default:
      return newState;
  }
};

export default CollectionsReducer;