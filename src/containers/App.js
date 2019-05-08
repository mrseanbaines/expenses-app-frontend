import { connect } from 'react-redux';
import App from '../components/App';
import { expensesActions, appActions, categoriesActions } from '../store/actions';

const mapStateToProps = ({ expenses, app, categories }) => ({
  expenses: expenses.expenses,
  categories: categories.categories,
  total: expenses.total,
  currentPage: app.currentPage,
});

const mapDispatchToProps = dispatch => ({
  getExpenses: args => dispatch(expensesActions.getExpenses(args)),
  getCategories: args => dispatch(categoriesActions.getCategories(args)),
  setCurrentPage: args => dispatch(appActions.setCurrentPage(args)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
