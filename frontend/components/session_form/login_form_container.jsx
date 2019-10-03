import { connect } from 'react-redux';

import { login, deleteErrors } from '../../actions/session_actions'
import LoginForm from './login_form'

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    formType: 'Sign In',
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    processForm: ((user) => dispatch(login(user))),
    deleteErrors: (() => dispatch(deleteErrors()))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);