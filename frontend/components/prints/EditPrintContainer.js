import React from 'react';
import { connect } from 'react-redux';

import { fetchPrint, updatePrint, deletePrint } from '../../actions/print_actions';
import EditForm from './EditForm';

const mapStateToProps = (state, ownProps) => {
  const defaultPrint = { text: '', title: '', photoFile: '' };
  const print = state.entities.prints[ownProps.match.params.printId] || defaultPrint;
  const formType = 'Update Print';

  return { print, formType }
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchPrint: ((id) => dispatch(fetchPrint(id))),
    processForm: ((print) => dispatch(updatePrint(print))),
    deletePrint: id => dispatch(deletePrint(id))
  });
};

class EditPrintForm extends React.Component {
  componentDidMount() {
    // debugger
    this.props.fetchPrint(this.props.match.params.printId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.print.id != this.props.match.params.printId) {
      this.props.fetchPrint(this.props.match.params.printId);
    }
  }

  render() {
    const { processForm, formType, print, deletePrint } = this.props;
    return (
      <EditForm
        processForm={processForm}
        deletePrint={deletePrint}
        formType={formType}
        print={print}
      />
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditPrintForm);