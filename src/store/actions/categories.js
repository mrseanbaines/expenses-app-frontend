import actionTypes from '../action-types';

const getCategoriesRequest = () => ({
  type: actionTypes.categories.GET_CATEGORIES_REQUEST,
});

const getCategoriesSuccess = ({ categories, total }) => ({
  type: actionTypes.categories.GET_CATEGORIES_SUCCESS,
  categories,
  total,
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

const deleteCategoryRequest = () => ({
  type: actionTypes.categories.DELETE_CATEGORY_REQUEST,
});

const deleteCategorySuccess = ({ category, total }) => ({
  type: actionTypes.categories.DELETE_CATEGORY_SUCCESS,
  category,
  total,
});

const deleteCategoryFailure = () => ({
  type: actionTypes.categories.DELETE_CATEGORY_FAILURE,
});

const getCategories = () => async dispatch => {
  try {
    dispatch(getCategoriesRequest());
    const response = await fetch(`${process.env.API_URL}/categories`);
    const json = await response.json();
    dispatch(getCategoriesSuccess(json));
  } catch (e) {
    dispatch(getCategoriesFailure());
  }
};

const addCategory = ({ category }) => async dispatch => {
  try {
    dispatch(addCategoryRequest());
    const response = await fetch(`${process.env.API_URL}/categories`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category: { name: category } }),
    });
    const json = await response.json();
    dispatch(addCategorySuccess(json));
  } catch (e) {
    dispatch(addCategoryFailure());
  }
};

const deleteCategory = ({ id }) => async dispatch => {
  try {
    dispatch(deleteCategoryRequest());
    const response = await fetch(`${process.env.API_URL}/categories/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    const json = await response.json();
    dispatch(deleteCategorySuccess(json));
  } catch (e) {
    dispatch(deleteCategoryFailure());
  }
};

export default { getCategories, addCategory, deleteCategory };
