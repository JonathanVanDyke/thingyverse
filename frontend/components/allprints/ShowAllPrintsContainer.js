import { connect } from 'react-redux';
import ShowAllPrints from './ShowAllPrints';
import { fetchPrints } from '../../actions/print_actions';
import { fetchCollection, fetchCollections } from '../../actions/collection_actions';



const mapStateToProps = (state) => {
  // debugger
  return ({
    prints: Object.values(state.entities.prints) ? Object.values(state.entities.prints) : []
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchPrints: () => dispatch(fetchPrints()),
    fetchCollections: () => dispatch(fetchCollections()),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowAllPrints);