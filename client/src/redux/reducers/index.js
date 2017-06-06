import { combineReducers } from 'redux';
import auth from './authReducer';
import analytics from './analyticsReducer';

export default combineReducers({
  auth,
  analytics
});
