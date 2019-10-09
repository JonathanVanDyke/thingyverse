import React from 'react';
import { PropTypes } from 'prop-types';

import PrintCardContainer from './PrintCardContainer';

const PrintCards = ({ printIds }) => {
  // debugger
  let printCards = printIds.map((printId) => {
    return(
      <PrintCardContainer
        key={printId}
        printId={printId}
      />
    )
  })


  return(
    <>
      {printCards}
    </>
  )
}

PrintCards.defaultProps = {
  printIds: [null, null, null]
}

PrintCards.propTypes = {
  printIds: PropTypes.array
}

export default PrintCards