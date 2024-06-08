import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { thunk } from 'redux-thunk';
import logger from './middleware/logger';
import { rootReducer } from './reducer';

const persistConfig = {
	key: 'root',
	storage,
};
export const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
	reducer: persistedReducer,
});
export const persistor = persistStore(store);
