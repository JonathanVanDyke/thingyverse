import * as PrintApiUtil from '../util/print_api_util';

export const RECEIVE_ALL_PRINTS = 'RECEIVE_ALL_PRINTS';
export const RECEIVE_PRINT = 'RECEIVE_POST';
export const REMOVE_PRINT = 'REMOVE_POST';

const receivePrints = (prints) => {
  return ({
    type: RECEIVE_ALL_PRINTS,
    prints
  })
}

export const fetchPrints = () => dispatch => {
  // debugger
  return PrintApiUtil.fetchPrints().then((prints) => {
    debugger
    dispatch(receivePrints(prints))});
}

const receivePrint = (print) => {
  return ({
    type: RECEIVE_PRINT,
    print
  })
}

export const fetchPrint = (id) => dispatch => {
  return PrintApiUtil.fetchPrint(id).then((print) => dispatch(receivePrint(print)));
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
  return PrintApiUtil.updatePrint(id).then((print) => dispatch(receivePrint(print)));
}
