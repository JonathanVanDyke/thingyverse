import { connect } from 'react-redux';

import { fetchUser } from '../../actions/session_actions'
import { fetchPrint, fetchPrints, createLike, deleteLike } from './../../actions/like_actions';
import { fetchCollection, fetchCollections } from '../../actions/collection_actions';


// 1. Create edit user route
// 2. Create edit/update controller
//    a. remember .update_attributes method...
// 3. pass down edit in dispatch
// import { edit } from '../../actions/session_actions';
import Profile from './Profile';

const mapStateToProps = ({ session, entities: { users, collections } }, ownProps) => {
  // debugger
  let userId = Number(ownProps.match.params.userId);
  return {
    currentUser: users[session.id] || {username: '', bio: '', avatar: '', prints: []},
    viewUser: users[Number(userId)] || { username: '', bio: '', avatar: '', prints: [], designs: [] },
    parent: {parent: 0},
    collections: collections,
  };
};

const mapDispatchToProps = dispatch => ({
  receiveUser: (id) => dispatch(fetchUser(id)),
  createLike: (print) => dispatch(createLike(print)),
  deleteLike: (print) => dispatch(deleteLike(print)),
  fetchCollections: () => dispatch(fetchCollections()),
  // fetchPrint: id => dispatch(fetchPrint(id)),
  // fetchPrints: () => dispatch(fetchPrints()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
