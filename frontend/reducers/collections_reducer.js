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
      // debugger
      newState = merge({}, oldState, action.collection)
      // debugger
      return newState
    case REMOVE_COLLECTION:
      debugger
      // return merge({}, oldState, action.collection)
      // return [].concat(newState)
      return merge({}, action.collection)
    default:
      return newState;
  }
};

export default CollectionsReducer;