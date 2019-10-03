import { connect } from 'react-redux';

import { signup, deleteErrors } from '../../actions/session_actions'
import SessionForm from './session_form'

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    formType: 'Sign Up',
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    processForm: ((user) => dispatch(signup(user))),
    deleteErrors: (() => dispatch(deleteErrors()))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);