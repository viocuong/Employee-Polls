import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoggedIn: false,
	users: {}, // Add the user impersonates throught signup function
	userLoggedIn: '',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		userHasSuccessfullyRegistered(state, action) {
			state.users[action.payload.id] = action.payload;
			state.isLoggedIn = true;
		},
		logout(state) {
			state.isLoggedIn = false;
		},
		userHasSuccessfullyLogin(state, action) {
			state.isLoggedIn = true;
			state.userLoggedIn = action.payload.id;
		},
		receivedUsers(state, action) {
			state.users = action.payload;
		},
	},
});

export const {
	userHasSuccessfullyRegistered,
	userHasSuccessfullyLogin,
	logout,
	receivedUsers,
} = authSlice.actions;
export default authSlice.reducer;
