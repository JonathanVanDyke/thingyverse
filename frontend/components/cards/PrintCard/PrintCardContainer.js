import { connect } from 'react-redux';
import { createLike, deleteLikeById, fetchLikes } from '../../../actions/like_actions';
import { fetchPrint, fetchPrints } from '../../../actions/print_actions';
import { createCollection, updateCollection, fetchCollection, deleteCollection } from '../../../actions/collection_actions';
import { fetchUser } from '../../../actions/session_actions';
import PrintCard from './PrintCard';

const mapStateToProps = (state, ownProps) => {
  //ownProps=printId
  let printId = ownProps.printId;
  // debugger
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

  let print_collects_collection_ids = print.print_collects.map((print_collect) => {
    return (
      print_collect.collection_id
    )
  })

  let user_collection_ids = currentUser.collections.map((collection) => {
    return (
      collection.id
    )
  })

  let userCollectionTitles = currentUser.collections.map((collection) => {
    return collection.title
  })

  let user_collection_id;
  let collected = false;
  for (let i = 0; i < user_collection_ids.length; i++) {
    for (let j = 0; j < print_collects_collection_ids.length; j++) {
      if (user_collection_ids[i] === print_collects_collection_ids[i]) {
        user_collection_id = user_collection_ids[i];
        collected = true;
        // debugger
      }
    }
  }

  let userCollectedId = null;
  if (currentUser.collect_follows.length >= 1) {
    userCollectedId = currentUser.collect_follows[0].collection_id
  }

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
  deleteCollection: (id) => dispatch(deleteCollection(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(PrintCard);
