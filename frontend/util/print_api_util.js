export const fetchPrints = () => {
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

// export const createPrint = (print) => {
//   return (
//     $.ajax({
//       method: 'POST',
//       url: `api/prints`,
//       data: { print }
//     })
//   );
// };

//updated to work with form
export const createPrint = (formData) => {
  return (
    $.ajax({
      url: '/api/prints',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    })
  );
};


// export const updatePrint = (print) => {
//   debugger
//   return (
//     $.ajax({
//       method: 'PATCH',
//       url: `api/prints/${print.id}`,
//       data: { print }
//     })
//   );
// };
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



