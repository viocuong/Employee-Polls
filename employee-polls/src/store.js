import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import logger from './middleware/logger';
import { rootReducer } from './reducer';

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(logger).concat(thunk),
});
