import * as CollectionAPIUtil from '../util/collection_api_util'

export const RECEIVE_COLLECTIONS = 'RECEIVE_COLLECTIONS';
export const RECEIVE_COLLECTION = 'RECEIVE_COLLECTION';
export const REMOVE_COLLECTION = 'REMOVE_COLLECTION';

export const receiveCollections = collections => ({
  type: RECEIVE_COLLECTIONS,
  collections
});

export const receiveCollection = collection => ({
  type: RECEIVE_COLLECTION,
  collection
});

export const removeCollection = (collection) => ({
  type: REMOVE_COLLECTION,
  collection
});


export const fetchCollections = () => dispatch => {
  // debugger
  return (
    CollectionAPIUtil.fetchCollections().then(
      collections => (dispatch(receiveCollections(collections))))
  )
};

export const fetchCollection = (id) => dispatch => {
  // debugger
  return (
    CollectionAPIUtil.fetchCollection(id).then(
      collection => (dispatch(receiveCollection(collection))))
  )
};

export const createCollection = (collection) => dispatch => {
  // debugger
  return (
    CollectionAPIUtil.createCollection(collection).then(
      collection => (dispatch(receiveCollection(collection))))
  )
};

export const deleteCollection = (collection_id) => dispatch => {
  // debugger
  return (
    CollectionAPIUtil.deleteCollection(collection_id).then(
      (collection) => (dispatch(removeCollection(collection))))
  )
};

export const updateCollection = (collection) => dispatch => {
  debugger
  return PrintApiUtil.updateCollection(collection).then((collection) => dispatch(receiveCollection(collection)));
}
