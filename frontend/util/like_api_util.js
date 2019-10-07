export const fetchLikes = () => {
  return(
    $.ajax({
      method: 'GET',
      url: `/api/likes`,
    })
  )
}

export const createLike = print => (
  $.ajax({
    method: 'POST',
    url: `/api/prints/${ print.id }/likes`,
    data: { print }
  })
);

export const deleteLike = (print) => {
  // debugger
  return(
    $.ajax({
      method: 'DELETE',
      url: `/api/prints/${print.id}/likes`
    })
  )
};