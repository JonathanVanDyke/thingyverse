import { connect } from 'react-redux';
import ShowAllPrints from './ShowAllPrints';
import { fetchPrints } from './../actions/print_actions';


const mapStateToProps = (state) => {
  // debugger
  return ({
    prints: Object.values(state.entities.prints) ? Object.values(state.entities.prints) : []
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchPrints: () => dispatch(fetchPrints()),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowAllPrints);