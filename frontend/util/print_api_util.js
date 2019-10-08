export const fetchPrints = () => {
  // debugger
  return (
    $.ajax({
      method: 'GET',
      url: '/api/prints'
    })
  );
};

export const fetchPrint = (id) => {
  // debugger
  return (
    $.ajax({
      method: 'GET',
      url: `api/prints/${id}`
    })
  );
};


//updated to work with form
export const createPrint = (formData) => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/prints',
      data: formData,
      contentType: false,
      processData: false
    })
  );
};


export const updatePrint = (formData) => {
  // debugger
  return (
    $.ajax({
      url: `/api/prints/${Number(formData.get('print[id]'))}`,
      method: 'PATCH',
      data: formData,
      contentType: false,
      processData: false
    })
  );
};


export const deletePrint = (id) => {
  // debugger
  return (
    $.ajax({
      method: 'DELETE',
      url: `/api/prints/${id}`
    })
  );
};



