import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	userHasSuccessfullyLogin,
	userHasSuccessfullyRegistered,
} from './AuthSlice';
import { addUsers } from '../../utils/api';

export const signup = createAsyncThunk(
	'signup',
	async (
		{ username, password, name },
		{ getState, dispatch, rejectWithValue },
	) => {
		const avaiableUsers = getState().auth.users;
		if (avaiableUsers[username]) {
			return rejectWithValue(AuthThunkError.userIsExist);
		}
		const user = {
			id: username,
			password,
			name,
			answers: {},
			questions: [],
		};
		await addUsers(user);
		dispatch(userHasSuccessfullyRegistered({ ...user }));
	},
);

export const login = createAsyncThunk(
	'login',
	async ({ username, password }, { dispatch, getState, rejectWithValue }) => {
		const avaiableUsers = getState().auth.users;
		const user = avaiableUsers[username];

		if (user.id === username && user.password === password) {
			dispatch(userHasSuccessfullyLogin(user));
			return;
		} else {
			return rejectWithValue(AuthThunkError.wrongUsernameOrPassword);
		}
	},
);

export const AuthThunkError = {
	userIsExist: 'User is exist, please enter other user',
	wrongUsernameOrPassword: 'wrongUsernameOrPassword',
};
