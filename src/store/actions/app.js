import actionTypes from '../action-types';

const setCurrentPage = ({ currentPage }) => ({
  type: actionTypes.app.SET_CURRENT_PAGE,
  currentPage,
});

export default { setCurrentPage };
