import actionTypes from '../action-types';

const initialState = {
  currentPage: 1,
};

export default (state = initialState, { type, currentPage }) => {
  switch (type) {
    case actionTypes.app.SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage,
      };
    }

    default: {
      return state;
    }
  }
};
