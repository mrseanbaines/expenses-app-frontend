import { combineReducers } from 'redux';
import expenses from './expenses';
import comments from './comments';
import receipts from './receipts';
import categories from './categories';
import app from './app';

export default combineReducers({
  expenses,
  comments,
  receipts,
  categories,
  app,
});
