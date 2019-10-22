import { connect } from 'react-redux';
import { createLike, deleteLikeById, fetchLikes } from '../../../actions/like_actions';
import { fetchPrint, fetchPrints } from '../../../actions/print_actions';
import { createCollection, updateCollection, fetchCollection, fetchCollections, deleteCollection } from '../../../actions/collection_actions';
import { fetchUser } from '../../../actions/session_actions';
import PrintCard from './PrintCard';

const mapStateToProps = (state, ownProps) => {
  //ownProps=printId
  let printId = ownProps.printId;
  //Test
  // let collectionParent = ownProps.collectionParent ? ownProps.collectionParent : [];
  //Test
  let collections = state.entities.collections;
  let print = state.entities.prints[printId];
  let currentUserId = state.session.id;
  let likes = state.entities.likes;
  let currentUser = state.entities.users[currentUserId] ? state.entities.users[currentUserId] : {};
  let authorId = print ? print.author : null;
  let author = print ? state.entities.users[print.author] : {};
  let likeId = 0; 
  for(let i = 0; i < likes.length; i++) {
    if (likes[i].user_id === currentUserId && likes[i].print_id === printId) {
      likeId = likes[i].id;
    };
  };

  //returns all print collection ids
  let print_collects_collection_ids = print ? print.print_collects.map((print_collect) => {
    return (
      print_collect.collection_id
    )
  }) : []

  //return all user collections
  let user_collection_ids = currentUser.collections ? currentUser.collections.map((collection) => {
    return (
      collection.id
    )
  }) : []

  let userCollectionTitles = currentUser.collections ? currentUser.collections.map((collection) => {
    return collection.title
  }) : []

  let user_collection_id;
  let collected = false;
  
  for (let i = 0; i < user_collection_ids.length; i++) {
    for (let j = 0; j < print_collects_collection_ids.length; j++) {
      if (user_collection_ids[i] === print_collects_collection_ids[i]) {
        user_collection_id = user_collection_ids[i];
        collected = true;
        
      }
    }
  }

  let collected2 = false;
  currentUser.first_collection_prints ? currentUser.first_collection_prints.forEach((userPrintId) => {
    if (userPrintId === printId) {
      collected2 = true;
    };
  }) : null
  

  let userCollectedId = null;
  // debugger
  if (currentUser.collect_follows) {
    if (currentUser.collect_follows.length && currentUser.collect_follows.length >= 1) {
      userCollectedId = currentUser.collect_follows[0].collection_id
    }
  }
 

  let first_collection_length = currentUser.first_collection_prints ? currentUser.first_collection_prints.length : 0;

  return {
    printId,
    print,
    author,
    authorId,
    likeId,
    currentUserId,
    currentUser,
    collected,
    userCollectionTitles,
    user_collection_id,
    userCollectedId,
    collections,
    collected2,
    first_collection_length
    // collectionParent
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  createLike: (print) => dispatch(createLike(print)),
  deleteLike: (print) => dispatch(deleteLikeById(print)),
  fetchLikes: () => dispatch(fetchLikes()),
  fetchPrint: id => dispatch(fetchPrint(id)),
  fetchPrints: () => dispatch(fetchPrints()),
  createCollection: (collection) => dispatch(createCollection(collection)),
  updateCollection: (collection) => dispatch(updateCollection(collection)),
  fetchCollection: (id) => dispatch(fetchCollection(id)),
  fetchCollections: () => dispatch(fetchCollections()),
  deleteCollection: (id) => dispatch(deleteCollection(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(PrintCard);