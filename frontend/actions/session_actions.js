import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const deleteErrors = () => ({
  type: REMOVE_ERRORS
})

const receiveUser = (user) => {
  // debugger
  return ({
    type: RECEIVE_USER,
    user
  })
}

export const signup = user => dispatch => (
  APIUtil.signup(user).then(
    user => (dispatch(receiveCurrentUser(user))), 
    error => (dispatch(receiveErrors(error.responseJSON))))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(
    user => (dispatch(receiveCurrentUser(user))), 
    error => (dispatch(receiveErrors(error.responseJSON))))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(
    () => (dispatch(logoutCurrentUser())))
);

export const fetchUser = (id) => dispatch => {
  // debugger
  return APIUtil.fetchUser(id).then((user) => dispatch(receiveUser(user)))
}
