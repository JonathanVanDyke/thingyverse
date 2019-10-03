import { connect } from 'react-redux';

// import { fetch } from '../../actions/print_actions'
import FeedCard from './FeedCard'

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    formType: 'Sign In',
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    processForm: ((user) => dispatch(login(user)))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedCard);