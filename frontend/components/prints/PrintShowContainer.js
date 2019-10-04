import { connect } from 'react-redux';
import PrintShow from './PrintShow';
import { fetchPrint } from './../../actions/print_actions';

const mapStateToProps = (state, ownProps) => {
  let printId = ownProps.match.params.printId;
  return({
    print: state.entities.prints[printId] || {title: '', photoUrl: ''}
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    fetchPrint: id => dispatch(fetchPrint(id))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(PrintShow);