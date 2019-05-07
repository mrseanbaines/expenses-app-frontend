import { combineReducers } from 'redux';
import expenses from './expenses';
import comments from './comments';
import receipts from './receipts';
import app from './app';

export default combineReducers({
  expenses,
  comments,
  receipts,
  app,
});
