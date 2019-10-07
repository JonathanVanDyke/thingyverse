import { connect } from 'react-redux';
import { createLike, deleteLike } from './../../actions/like_actions';
import { fetchPrint, fetchPrints } from './../../actions/print_actions';

import DesignItem from './DesignItem';

const mapStateToProps = ({ session, entities: { users } }, ownProps) => {
  // debugger
  let userId = Number(ownProps.match.params.userId);
  return {
    currentUser: users[session.id] || { username: '', bio: '', avatar: '', prints: [] },
    viewUser: users[userId],
    likes: ownProps.print.likes.length
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
