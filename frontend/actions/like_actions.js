import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

export const receiveLikes = likes => ({
  type: RECEIVE_LIKES,
  likes
});

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const removeLike = (print) => ({
  type: REMOVE_LIKE,
  print
});


export const fetchLikes = () => dispatch => {
  // debugger
  return(
    LikeAPIUtil.fetchLikes().then(
      likes => (dispatch(receiveLikes(likes))))
  )
};
export const createLike = (printId, userId) => dispatch => {
  // debugger
  return(
    LikeAPIUtil.createLike(printId, userId).then(
      print => (dispatch(receiveLike(print))))
  )
};

export const deleteLike = (print) => dispatch => {
  // debugger
  return(
    LikeAPIUtil.deleteLike(print).then(
      (print) => (dispatch(removeLike(print))))
  )
};

export const deleteLikeById = (id) => dispatch => {
  // debugger
  return(
    LikeAPIUtil.deleteLikeById(id).then(
      (print) => (dispatch(removeLike(print))))
  )
};