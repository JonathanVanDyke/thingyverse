import { connect } from 'react-redux';

import { fetchUser } from '../../actions/session_actions'

// 1. Create edit user route
// 2. Create edit/update controller
//    a. remember .update_attributes method...
// 3. pass down edit in dispatch
// import { edit } from '../../actions/session_actions';
import Profile from './Profile';

const mapStateToProps = ({ session, entities: { users } }, ownProps) => {
  // debugger
  let userId = Number(ownProps.match.params.userId);
  return {
    currentUser: users[session.id] || {username: '', bio: '', avatar: '', prints: []},
    viewUser: users[Number(userId)] || { username: '', bio: '', avatar: '', prints: [], designs: [] }
  };
};

const mapDispatchToProps = dispatch => ({
  receiveUser: (id) => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
