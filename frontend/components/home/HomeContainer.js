import { connect } from 'react-redux';
import { fetchCollections } from '../../actions/collection_actions';
import Home from './Home';

const mapStateToProps = (state, ownProps) => {
  let collections = state.entities.collections
  let collectionIds = collections ? Object.values(collections).map((collection) => {
    return collection.id
  }) : []

  return {
    collections,
    collectionIds
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollections()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
