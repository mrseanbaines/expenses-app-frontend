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

const updateExpense = updatedExpense => ({
  type: actionTypes.expenses.UPDATE_EXPENSE,
  updatedExpense,
});

const getExpenses = ({ params }) => async dispatch => {
  try {
    dispatch(getExpensesRequest());
    const response = await fetch(`${process.env.API_URL}/expenses/${params}`);
    const json = await response.json();
    dispatch(getExpensesSuccess(json));
    return json;
  } catch (error) {
    dispatch(getExpensesFailure());
    return error;
  }
};

export default {
  getExpenses,
  updateExpense,
};
