import actionTypes from '../action-types';

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
    return json;
  } catch (error) {
    dispatch(updateExpenseFailure());
    return error;
  }
};

export default { updateExpense };
