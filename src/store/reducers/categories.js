import actionTypes from '../action-types';

const initialState = {
  loading: false,
  success: false,
  error: false,
  categories: [],
  total: 0,
};

export default (state = initialState, { type, categories }) => {
  switch (type) {
    case actionTypes.categories.GET_CATEGORIES_REQUEST: {
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    }

    case actionTypes.categories.GET_CATEGORIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        categories: categories.categories,
        total: categories.total,
      };
    }

    case actionTypes.categories.GET_CATEGORIES_FAILURE: {
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
