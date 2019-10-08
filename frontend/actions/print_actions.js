import * as PrintApiUtil from '../util/print_api_util';

export const RECEIVE_ALL_PRINTS = 'RECEIVE_ALL_PRINTS';
export const RECEIVE_PRINT = 'RECEIVE_PRINT';
export const REMOVE_PRINT = 'REMOVE_PRINT';

export const RECEIVE_PRINT_ERRORS = 'RECEIVE_PRINT_ERRORS';
export const REMOVE_PRINT_ERRORS = 'REMOVE_PRINT_ERRORS';

export const receiveErrors = errors => ({
  type: RECEIVE_PRINT_ERRORS,
  errors
});

export const deleteErrors = () => ({
  type: REMOVE_PRINT_ERRORS
})

const receivePrints = (prints) => {
  return ({
    type: RECEIVE_ALL_PRINTS,
    prints
  })
}

export const fetchPrints = () => dispatch => {
  // debugger
  return PrintApiUtil.fetchPrints().then((prints) => {
    // debugger
    dispatch(receivePrints(prints))});
}

const receivePrint = (print) => {
  return ({
    type: RECEIVE_PRINT,
    print
  })
}

export const fetchPrint = (id) => dispatch => {
  // debugger
  return PrintApiUtil.fetchPrint(id).then((print) => {
    dispatch(receivePrint(print))});
}

const removePrint = (print) => {
  return ({
    type: REMOVE_PRINT,
    printId: print.id
  })
}

export const deletePrint = (id) => dispatch => {
  return PrintApiUtil.deletePrint(id).then((print) => dispatch(removePrint(print)));
}

export const createPrint = (print) => dispatch => {
  return PrintApiUtil.createPrint(print).then((print) => dispatch(receivePrint(print)));
}

export const updatePrint = (id) => dispatch => {
  // debugger
  return PrintApiUtil.updatePrint(id).then((print) => dispatch(receivePrint(print)));
}
