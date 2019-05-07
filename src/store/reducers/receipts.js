import actionTypes from '../action-types';

const initialState = {
  loading: false,
  success: false,
  error: false,
};

export default (state = initialState, { type }) => {
  switch (type) {
    case actionTypes.receipts.UPLOAD_RECEIPT_REQUEST: {
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    }

    case actionTypes.receipts.UPLOAD_RECEIPT_SUCCESS: {
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
      };
    }

    case actionTypes.receipts.UPLOAD_RECEIPT_FAILURE: {
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};
