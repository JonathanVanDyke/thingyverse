export const fetchPrint = () => {
  return (
    $.ajax({
      method: 'GET',
      url: 'api/prints'
    })
  );
};

export const fetchPrint = (id) => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/prints/${id}`
    })
  );
};

export const createPrint = (print) => {
  return (
    $.ajax({
      method: 'POST',
      url: `api/prints`,
      data: { print }
    })
  );
};


export const updatePost = (print) => {
  return (
    $.ajax({
      method: 'PATCH',
      url: `api/prints/${print.id}`,
      data: { print }
    })
  );
};


export const deletePost = (id) => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `api/prints/${id}`
    })
  );
};



