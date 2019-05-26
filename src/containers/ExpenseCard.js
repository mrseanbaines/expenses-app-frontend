import { connect } from 'react-redux';
import ExpenseCard from '../components/ExpenseCard';
import { expensesActions, receiptsActions } from '../store/actions';

const mapStateToProps = ({ categories }) => ({
  categories: categories.categories,
});

const mapDispatchToProps = dispatch => ({
  updateExpense: args => dispatch(expensesActions.updateExpense(args)),
  uploadReceipt: args => dispatch(receiptsActions.uploadReceipt(args)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseCard);
