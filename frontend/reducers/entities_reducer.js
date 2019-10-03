import { combineReducers } from 'redux';

import users from './users_reducer';
import prints from './prints_reducer'

export default combineReducers({
  users,
  prints,
});
