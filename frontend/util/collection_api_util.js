export const fetchCollections = () => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/collections`,
    })
  )
}

export const fetchCollection = (collection_id) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/collections/${collection_id}`,
    })
  )
}

export const createCollection = (collection) => {
  // debugger
  return (
    $.ajax({
      method: 'POST',
      url: `/api/collections`,
      data: { collection }
    })
  )
};

export const updateCollection = (collection) => {
  // debugger
  return (
    $.ajax({
      url: `/api/collections/${collection.id}`,
      method: 'PATCH',
      data: { collection }
    })
  );
};

export const deleteCollection = (collection_id) => {
  // debugger
  return (
    $.ajax({
      method: 'DELETE',
      url: `/api/collections/${collection_id}`
    })
  )
};