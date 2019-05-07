import actionTypes from '../action-types';
import { expensesActions } from '.';

const addCommentRequest = () => ({
  type: actionTypes.comments.ADD_COMMENT_REQUEST,
});

const addCommentSuccess = () => ({
  type: actionTypes.comments.ADD_COMMENT_SUCCESS,
});

const addCommentFailure = () => ({
  type: actionTypes.comments.ADD_COMMENT_FAILURE,
});

const addComment = ({ id, comment }) => async dispatch => {
  try {
    dispatch(addCommentRequest());
    const response = await fetch(`${process.env.API_URL}/expenses/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ comment }),
    });
    const json = await response.json();
    dispatch(expensesActions.updateExpense(json));
    dispatch(addCommentSuccess());
    return json;
  } catch (error) {
    dispatch(addCommentFailure());
    return error;
  }
};

export default {
  addComment,
};
