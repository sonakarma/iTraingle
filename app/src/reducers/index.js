import { combineReducers } from 'redux';
import authReducer from './authReducer'
import extras from './extras'

export default combineReducers({
authReducer:authReducer,
extras:extras
});
