import { connect } from 'react-redux';
import { fetchPrint } from '../../../actions/print_actions';
import { fetchCollection } from '../../../actions/collection_actions';
import { fetchUser } from '../../../actions/session_actions';
import CollectionCard from './CollectionCard';

const mapStateToProps = (state, ownProps) => {
  let mini = ownProps.mini;
  let collectionId = ownProps.collectionId;
  let collection = state.entities.collections ? state.entities.collections[collectionId] : { print_collects: []};
  let currentUserId = state.session.id;

  let authorId = collection ? collection.author_id : null;
  // debugger
  let printId = collection.print_collects[0] ? collection.print_collects[0].print_id : null;
  let prints = state.entities.prints ? state.entities.prints : {};
  // debugger
  let print = prints[printId] ? prints[printId] : {photoUrl: ''}
  let author = collection ? state.entities.users[authorId] : {};
  // debugger
  return {
    collectionId,
    collection,
    author,
    authorId,
    printId,
    print,
    currentUserId,
    mini,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchPrint: id => dispatch(fetchPrint(id)),
  fetchCollection: id => dispatch(fetchCollection(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionCard);
