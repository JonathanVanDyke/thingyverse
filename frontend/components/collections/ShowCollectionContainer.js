import { connect } from 'react-redux';
import ShowCollection from './ShowCollection';
import { fetchUser } from '../../actions/session_actions'
import { fetchCollection, deleteCollection, fetchCollections } from './../../actions/collection_actions';
import { fetchPrint } from './../../actions/print_actions';


const mapStateToProps = (state, ownProps) => {
  let collectionId = Number(ownProps.match.params.collectionId);
  // debugger
  return ({
    current_user_id: state.session.id || null,
    collection: state.entities.collections[Number(collectionId)] || { title: '', author_id: null, print_collects: [] },
    prints: state.entities.prints
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchCollection: id => dispatch(fetchCollection(id)),
    fetchPrint: id => dispatch(fetchPrint(id)),
    fetchCollections: () => dispatch(fetchCollections()),
    deleteCollection: id => dispatch(deleteCollection(id)),
    fetchUser: (id) => dispatch(fetchUser(id)),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowCollection);