import { connect } from 'react-redux';
import ShowAllCollections from './ShowAllCollections';
import { fetchCollections } from '../../actions/collection_actions';


const mapStateToProps = (state) => {
  //collections is an array of collection objects
  return ({
    collections: Object.values(state.entities.collections) ? Object.values(state.entities.collections) : []
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchCollections: () => dispatch(fetchCollections()),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowAllCollections);