import { merge } from 'lodash'

import { RECEIVE_CURRENT_USER, RECEIVE_USER } from '../actions/session_actions';
import { RECEIVE_COLLECTION, REMOVE_COLLECTION } from '../actions/collection_actions'
//may need to include assocatiations

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: {id: action.user.id, bio: action.user.bio, avatar: action.user.avatar, username: action.user.username, designs: action.user.designs} });
    case RECEIVE_COLLECTION:
      // debugger
      // return merge({}, state, { [Object.values(action.collection)[0].id]: Object.values(action.collection)[0]} );
      return state;
    case REMOVE_COLLECTION:
      // for (let i = 0; i < newState[action.like.printId].user_likes.length; i++) {
      //   if (newState[action.like.printId].user_likes[i] === action.like.userId) {
      //     newState[action.like.printId].user_likes.splice(i, 1)
      //   }
      // }
      // debugger
      // return merge({}, state, { [action.collection.author_id]: {id: action.user.id, bio: action.user.bio, avatar: action.user.avatar, username: action.user.username, designs: action.user.designs} });
      return state;
    default:
      return state;
  }
};

export default usersReducer;
