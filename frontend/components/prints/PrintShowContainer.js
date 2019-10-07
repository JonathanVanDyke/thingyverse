import { connect } from 'react-redux';
import PrintShow from './PrintShow';
import { fetchUser } from '../../actions/session_actions'
import { fetchPrint, deletePrint, fetchPrints } from './../../actions/print_actions';
import { fetchLikes, createLike, deleteLike } from './../../actions/like_actions';

const mapStateToProps = (state, ownProps) => {
  let printId = Number(ownProps.match.params.printId);
  // debugger
  return({
    current_user_id: state.session.id || null,
    print: state.entities.prints[printId] || {title: '', photoUrl: '',user_likes: [] , author: {username: '', id: null, avatar: ''}},
    likes: state.entities.likes.filter((like) => {return like.print_id === printId}),
    users: state.entities.users || {},
    // likers: state.entities.users
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    fetchPrint: id => dispatch(fetchPrint(id)),
    fetchPrints: () => dispatch(fetchPrints()),
    deletePrint: id => dispatch(deletePrint(id)),
    fetchLikes: () => dispatch(fetchLikes()),
    createLike: (print) => dispatch(createLike(print)),
    deleteLike: (print) => dispatch(deleteLike(print)),
    fetchUser: (id) => dispatch(fetchUser(id))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(PrintShow);