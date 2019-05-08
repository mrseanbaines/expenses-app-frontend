import actionTypes from '../action-types';

const getCategoriesRequest = () => ({
  type: actionTypes.categories.GET_CATEGORIES_REQUEST,
});

const getCategoriesSuccess = categories => ({
  type: actionTypes.categories.GET_CATEGORIES_SUCCESS,
  categories,
});

const getCategoriesFailure = () => ({
  type: actionTypes.categories.GET_CATEGORIES_FAILURE,
});

const getCategories = () => async dispatch => {
  try {
    dispatch(getCategoriesRequest());
    const response = await fetch(`${process.env.API_URL}/categories`);
    const json = await response.json();
    dispatch(getCategoriesSuccess(json));
    return json;
  } catch (error) {
    dispatch(getCategoriesFailure());
    return error;
  }
};

export default { getCategories };
