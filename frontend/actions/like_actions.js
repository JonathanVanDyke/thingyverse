import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const removeLike = (print) => ({
  type: REMOVE_LIKE,
  print
});


export const createLike = print => dispatch => (
  LikeAPIUtil.createLike(print).then(
    print => (dispatch(receiveLike(print))))
);

export const deleteLike = (print) => dispatch => {
  // debugger
  return(
    LikeAPIUtil.deleteLike(print).then(
      (print) => (dispatch(removeLike(print))))
  )
};