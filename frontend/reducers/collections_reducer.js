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
      return newState
    case REMOVE_COLLECTION:
      return [].concat(newState)
    default:
      return newState;
  }
};

export default CollectionsReducer;