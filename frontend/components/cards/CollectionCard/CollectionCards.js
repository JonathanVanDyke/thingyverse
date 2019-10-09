import React from 'react';
import { PropTypes } from 'prop-types';
import CollectionCardContainer from './CollectionCardContainer';

//? Input: Array of Collection Ids
//? Output: Collection Cards

const CollectionCards = ({ collectionIds }) => {
  let collectionCards = collectionIds.map((collectionId) => {
    return (
      <CollectionCardContainer
        key={collectionId}
        collectionId={collectionId}
      >
      </CollectionCardContainer>
    );
  });

  return (
    <>
      {collectionCards}
    </>
  );
};


CollectionCards.defaultProps = {
  collectionIds: [null, null, null]
}

CollectionCards.propTypes = {
  collectionIds: PropTypes.array
}

export default CollectionCards;