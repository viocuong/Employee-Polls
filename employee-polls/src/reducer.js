import { combineReducers } from '@reduxjs/toolkit';
import AuthReducer from '../src/login/AuthSlice';
export const rootReducer = combineReducers({
	auth: AuthReducer,
});
