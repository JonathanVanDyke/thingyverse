import { connect } from 'react-redux';
import PrintShow from './PrintShow';
import { fetchPrint } from './../../actions/print_actions';

const mapStateToProps = (state, ownProps) => {
  let printId = ownProps.match.params.printId;
  // debugger
  return({
    current_user: Object.values(state.entities.users)[0],
    print: state.entities.prints[printId] || {title: '', photoUrl: '', author: {username: '', id: null, avatar: ''}}
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    fetchPrint: id => dispatch(fetchPrint(id))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(PrintShow);