import { connect } from 'react-redux';
import PrintShow from './PrintShow';
import { fetchPrint, deletePrint, fetchPrints } from './../../actions/print_actions';
import { fetchLikes, createLike, deleteLike } from './../../actions/like_actions';

const mapStateToProps = (state, ownProps) => {
  let printId = Number(ownProps.match.params.printId);
  // debugger
  return({
    current_user: Object.values(state.entities.users)[0] || { username: '', id: null, avatar: '' },
    print: state.entities.prints[printId] || {title: '', photoUrl: '',user_likes: [] , author: {username: '', id: null, avatar: ''}},
    likes: state.entities.likes.filter((like) => {return like.print_id === printId})
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    fetchPrint: id => dispatch(fetchPrint(id)),
    fetchPrints: () => dispatch(fetchPrints()),
    deletePrint: id => dispatch(deletePrint(id)),
    fetchLikes: () => dispatch(fetchLikes()),
    createLike: (print) => dispatch(createLike(print)),
    deleteLike: (print) => dispatch(deleteLike(print))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(PrintShow);