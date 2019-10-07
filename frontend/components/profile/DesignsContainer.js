// import { connect } from 'react-redux';
// import { fetchUser } from '../../actions/session_actions'

// import Profile from './Profile';

// const mapStateToProps = ({ session, entities: { users } }, ownProps) => {
//   // debugger
//   let userId = Number(ownProps.match.params.userId);
//   return {
//     currentUser: users[session.id] || { username: '', bio: '', avatar: '', prints: [] },
//     viewUser: users[userId]
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   receiveUser: (id) => dispatch(fetchUser(id))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Profile);
