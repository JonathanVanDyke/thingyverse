import { connect } from 'react-redux';

import { fetchUser } from '../../actions/session_actions';
import { fetchPrint, fetchPrints } from '../../actions/print_actions';
import { fetchCollection } from '../../actions/collection_actions';
import { createLike, deleteLike } from './../../actions/like_actions';

import CollectionsProfile from './CollectionsProfile';

const mapStateToProps = ({ session, entities: { users, collections, prints } }, ownProps) => {
  // debugger
  let userId = Number(ownProps.match.params.userId);
  return {
    currentUser: users[session.id] || { username: '', bio: '', avatar: '', prints: [] },
    viewUser: users[Number(userId)] || { username: '', bio: '', avatar: '', prints: [], designs: [] },
    parent: { parent: 0 },
    collections: collections,
    prints: prints,
  };
};

const mapDispatchToProps = dispatch => ({
  receiveUser: (id) => dispatch(fetchUser(id)),
  createLike: (print) => dispatch(createLike(print)),
  deleteLike: (print) => dispatch(deleteLike(print)),
  fetchPrint: id => dispatch(fetchPrint(id)),
  fetchPrints: () => dispatch(fetchPrints()),
  fetchCollection: id => dispatch(fetchCollection(id)),
  // fetchPrints: () => dispatch(fetchPrints()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsProfile);
