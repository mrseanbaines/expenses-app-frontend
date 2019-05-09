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

const addCategoryRequest = () => ({
  type: actionTypes.categories.ADD_CATEGORY_REQUEST,
});

const addCategorySuccess = ({ category, total }) => ({
  type: actionTypes.categories.ADD_CATEGORY_SUCCESS,
  category,
  total,
});

const addCategoryFailure = () => ({
  type: actionTypes.categories.ADD_CATEGORY_FAILURE,
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

const addCategory = ({ category }) => async dispatch => {
  try {
    dispatch(addCategoryRequest());
    const response = await fetch(`${process.env.API_URL}/categories`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category }),
    });
    const json = await response.json();
    dispatch(addCategorySuccess(json));
    return json;
  } catch (error) {
    dispatch(addCategoryFailure());
    return error;
  }
};

export default { getCategories, addCategory };
