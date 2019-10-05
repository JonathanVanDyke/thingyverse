import { connect } from 'react-redux';

import { createPrint, deleteErrors } from '../../actions/print_actions'
import PrintForm from './PrintForm'

const mapStateToProps = (state, ownProps) => {
  // debugger
  // debugger
  return ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.session,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    processForm: ((print) => dispatch(createPrint(print))),
    deleteErrors: (() => dispatch(deleteErrors()))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(PrintForm);