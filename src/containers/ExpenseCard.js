import { connect } from 'react-redux';
import ExpenseCard from '../components/ExpenseCard';
import { expensesActions, receiptsActions } from '../store/actions';

const mapDispatchToProps = dispatch => ({
  updateExpense: args => dispatch(expensesActions.updateExpense(args)),
  uploadReceipt: args => dispatch(receiptsActions.uploadReceipt(args)),
});

export default connect(
  null,
  mapDispatchToProps
)(ExpenseCard);
