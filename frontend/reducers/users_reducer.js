import { merge } from 'lodash'

import { RECEIVE_CURRENT_USER, RECEIVE_USER } from '../actions/session_actions';
import { RECEIVE_COLLECTION, REMOVE_COLLECTION } from '../actions/collection_actions'
//may need to include assocatiations

const usersReducer = (state = {}, action) => {
  let newState = merge({}, state);
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: {id: action.user.id, bio: action.user.bio, avatar: action.user.avatar, username: action.user.username, designs: action.user.designs} });
    case RECEIVE_COLLECTION:
      debugger
      if (Object.values(action.collection)[0].author_id && Object.values(action.collection)[0].collected_prints) {
        return merge({}, state, { [Object.values(action.collection)[0].author_id]: {first_collection_prints:  Object.values(action.collection)[0].collected_prints} });
      } else {
        return newState
      }

    case REMOVE_COLLECTION:
      // debugger

      // need to splice...
      // let newArr
      // for (let i = 0; i < Object.values(action.collection)[0].collected_prints.length ;i++) {
      //   if (Object.values(action.collection)[0].collected_prints[i] !== collectionId) {
      //     newArr = Object.values(action.collection)[0].collected_prints.splice(i, 1)
      //   }
      // }
      
      // debugger
      if (Object.values(newState)[0] && Object.values(action.collection)[0].collected_prints) {
        Object.values(newState)[0].first_collection_prints = Object.values(action.collection)[0].collected_prints
        return newState
      } else {
        return newState
      }
       

      // newState = merge({}, state, { [Object.values(action.collection)[0].author_id]: { first_collection_prints: newArr } })
      // return newState

      // return merge({}, state, { [Object.values(action.collection)[0].author_id]: { first_collection_prints: Object.values(action.collection)[0].collected_prints } });
      // return state;
    default:
      return state;
  }
};

export default usersReducer;
