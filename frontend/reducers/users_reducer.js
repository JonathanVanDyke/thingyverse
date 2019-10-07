import { merge } from 'lodash'

import { RECEIVE_CURRENT_USER, RECEIVE_USER } from '../actions/session_actions';
//may need to include assocatiations

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_USER:
      debugger
      return merge({}, state, { [action.user.id]: {id: action.user.id, bio: action.user.bio, avatar: action.user.avatar, username: action.user.username, designs: action.user.designs} });
    default:
      return state;
  }
};

export default usersReducer;
