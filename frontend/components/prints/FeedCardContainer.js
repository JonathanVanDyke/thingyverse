import { connect } from 'react-redux';
import { fetchPrints } from '../../actions/print_actions';

// import { fetch } from '../../actions/print_actions'
import FeedCard from './FeedCard'

const mapStateToProps = ({ entities: { prints } }) => {
  // debugger
  return ({
    prints: Object.values(prints),
  });
};

const mapDispatchToProps = (dispatch) => {
  // debugger
  return ({
    fetchPrints: (() => dispatch(fetchPrints()))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedCard);