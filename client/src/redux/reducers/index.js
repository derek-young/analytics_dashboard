import { combineReducers } from 'redux';
import auth from './authReducer';
import analytics from './analyticsReducer';
import nav from './navReducer';
import user from './userReducer';

export default combineReducers({
  auth,
  analytics,
  nav,
  user
});
