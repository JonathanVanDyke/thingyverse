import { connect } from 'react-redux';
import PrintShow from './PrintShow';
import { fetchPrint, deletePrint } from './../../actions/print_actions';
import { createLike, deleteLike } from './../../actions/like_actions';

const mapStateToProps = (state, ownProps) => {
  let printId = ownProps.match.params.printId;
  // debugger
  return({
    current_user: Object.values(state.entities.users)[0],
    print: state.entities.prints[printId] || {title: '', photoUrl: '',user_likes: [] , author: {username: '', id: null, avatar: ''}}
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    fetchPrint: id => dispatch(fetchPrint(id)),
    deletePrint: id => dispatch(deletePrint(id)),
    createLike: (print) => dispatch(createLike(print)),
    deleteLike: (print) => dispatch(deleteLike(print))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(PrintShow);