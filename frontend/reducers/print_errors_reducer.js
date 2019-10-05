import {
  RECEIVE_PRINT_ERRORS,
  REMOVE_PRINT_ERRORS
} from '../actions/print_actions';

export default (state = [], action) => {
  Object.freeze(state);
  // debugger
  switch (action.type) {
    case RECEIVE_PRINT_ERRORS:
      return action.errors;
    case REMOVE_PRINT_ERRORS:
      return [];
    default:
      return state;
  }
};
