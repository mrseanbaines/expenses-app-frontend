import actionTypes from '../action-types';
import { expensesActions } from '.';

const uploadReceiptRequest = () => ({
  type: actionTypes.receipts.UPLOAD_RECEIPT_REQUEST,
});

const uploadReceiptSuccess = () => ({
  type: actionTypes.receipts.UPLOAD_RECEIPT_SUCCESS,
});

const uploadReceiptFailure = () => ({
  type: actionTypes.receipts.UPLOAD_RECEIPT_FAILURE,
});

const uploadReceipt = ({ id, formData }) => async dispatch => {
  try {
    dispatch(uploadReceiptRequest());
    const response = await fetch(`${process.env.API_URL}/expenses/${id}/receipts`, {
      method: 'POST',
      body: formData,
    });
    const json = await response.json();
    dispatch(expensesActions.updateExpense(json));
    dispatch(uploadReceiptSuccess());
    return json;
  } catch (error) {
    dispatch(uploadReceiptFailure());
    return error;
  }
};

export default {
  uploadReceipt,
};
