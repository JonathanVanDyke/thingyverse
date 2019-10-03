import {
  RECEIVE_ALL_PRINTS,
  RECEIVE_PRINT,
  REMOVE_PRINT,
} from '../actions/print_actions';
import merge from 'lodash/merge';

const PrintsReducer = (oldState = {}, action) => {
  // debugger
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch (action.type) {
    case RECEIVE_ALL_PRINTS:
      return action.prints;
    case RECEIVE_PRINT:
      newState[action.print.id] = action.print;
      return newState;
    case REMOVE_PRINT:
      delete newState[action.printId];
      return newState;
    default:
      return newState;
  }
};

export default PrintsReducer;
