import { connect } from 'react-redux';
import { createLike, deleteLike } from './../../actions/like_actions';
import { fetchPrint, fetchPrints } from './../../actions/print_actions';
import { fetchUser } from './../../actions/session_actions';
import DesignItem from './DesignItem';

const mapStateToProps = (state, ownProps) => {
  // debugger
  let userId = Number(ownProps.match.params.userId);
  return {
    currentUser: state.entities.users[state.session.id] || { username: '', bio: '', avatar: '', prints: [] },
    viewUser: state.entities.users[userId],
    users: state.entities.users,
    // prints: state.entities.prints,
    print: state.entities.prints[ownProps.print] || {id: null, title: '', photoUrl: '', user_likes: []},
    printId: ownProps.print,
    userId: userId,
    likes: state.entities.likes.filter((like) => { return like.print_id === ownProps.print }),
  };
};

const mapDispatchToProps = dispatch => ({
  receiveUser: (id) => dispatch(fetchUser(id)),
  createLike: (print) => dispatch(createLike(print)),
  deleteLike: (print) => dispatch(deleteLike(print)),
  fetchPrint: id => dispatch(fetchPrint(id)),
  fetchPrints: () => dispatch(fetchPrints()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DesignItem);
