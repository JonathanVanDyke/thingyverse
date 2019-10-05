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


export const updatePrint = (print) => {
  return (
    $.ajax({
      method: 'PATCH',
      url: `api/prints/${print.id}`,
      data: { print }
    })
  );
};


export const deletePrint = (id) => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `api/prints/${id}`
    })
  );
};



