export const fetchLikes = () => {
  return(
    $.ajax({
      method: 'GET',
      url: `/api/likes`,
    })
  )
}

export const createLike = (printId, userId) => {
  // debugger
  return(
    $.ajax({
      method: 'POST',
      url: `/api/likes`,
      data: { printId, userId }
    })
  )
};

export const deleteLike = (like) => {
  // debugger
  return(
    $.ajax({
      method: 'DELETE',
      url: `/api/likes/${like.id}`
    })
  )
};