import { connect } from 'react-redux';

// 1. Create edit user route
// 2. Create edit/update controller
//    a. remember .update_attributes method...
// 3. pass down edit in dispatch
// import { edit } from '../../actions/session_actions';
import Profile from './Profile';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  edit: () => dispatch(() => 'hi')
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
