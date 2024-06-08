import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoggedIn: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		increment(state) {
			state.value++;
		},
		decrement(state) {
			state.value--;
		},
		incrementByAmount(state, action) {
			state.value += action.payload;
		},
	},
});

export const { increment, decrement, incrementByAmount } = authSlice.actions;
export default authSlice.reducer;
