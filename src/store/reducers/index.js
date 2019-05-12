import { combineReducers } from 'redux';
import expenses from './expenses';
import receipts from './receipts';
import categories from './categories';
import app from './app';

export default combineReducers({
  expenses,
  receipts,
  categories,
  app,
});
