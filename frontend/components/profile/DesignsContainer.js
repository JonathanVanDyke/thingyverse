import { connect } from 'react-redux';
import { fetchPrint } from '../../actions/print_actions';

// import { fetch } from '../../actions/print_actions'
import PrintIndex from './PrintIndex'

const mapStateToProps = (state) => {
  // debugger
  return ({
    prints: Object.keys(state.entities.prints).map(id => state.entities.prints[Number(id)]),
  });
};

const mapDispatchToProps = (dispatch) => {
  // debugger
  return ({
    fetchPrint: (() => dispatch(fetchPrint()))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(PrintIndex);