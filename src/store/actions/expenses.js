import actionTypes from '../action-types';

const getExpensesRequest = () => ({
  type: actionTypes.expenses.GET_EXPENSES_REQUEST,
});

const getExpensesSuccess = expenses => ({
  type: actionTypes.expenses.GET_EXPENSES_SUCCESS,
  expenses,
});

const getExpensesFailure = () => ({
  type: actionTypes.expenses.GET_EXPENSES_FAILURE,
});

const updateExpenseRequest = () => ({
  type: actionTypes.expenses.UPDATE_EXPENSE_REQUEST,
});

const updateExpenseSuccess = updatedExpense => ({
  type: actionTypes.expenses.UPDATE_EXPENSE_SUCCESS,
  updatedExpense,
});

const updateExpenseFailure = () => ({
  type: actionTypes.expenses.UPDATE_EXPENSE_FAILURE,
});

const getExpenses = ({ params }) => async dispatch => {
  try {
    dispatch(getExpensesRequest());
    const response = await fetch(`${process.env.API_URL}/expenses/${params}`);
    const json = await response.json();
    dispatch(getExpensesSuccess(json));
  } catch (e) {
    dispatch(getExpensesFailure());
  }
};

const updateExpense = ({ id, comment, category }) => async dispatch => {
  try {
    dispatch(updateExpenseRequest());
    const response = await fetch(`${process.env.API_URL}/expenses/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ comment, category }),
    });
    const json = await response.json();
    dispatch(updateExpenseSuccess(json));
  } catch (e) {
    dispatch(updateExpenseFailure());
  }
};

export default { getExpenses, updateExpense };
