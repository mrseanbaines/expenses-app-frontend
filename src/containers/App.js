import { connect } from 'react-redux';
import App from '../components/App';
import { expensesActions, appActions } from '../store/actions';

const mapStateToProps = ({ expenses, app }) => ({
  expenses: expenses.expenses,
  total: expenses.total,
  currentPage: app.currentPage,
});

const mapDispatchToProps = dispatch => ({
  getExpenses: args => dispatch(expensesActions.getExpenses(args)),
  setCurrentPage: args => dispatch(appActions.setCurrentPage(args)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
