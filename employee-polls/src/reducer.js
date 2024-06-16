import { combineReducers } from '@reduxjs/toolkit';
import AuthReducer from './features/login/AuthSlice';
import HomeReducer from './features/home/slice';
import MainReducer from './features/main/slice';

export const rootReducer = combineReducers({
	auth: AuthReducer,
	home: HomeReducer,
	main: MainReducer,
});
