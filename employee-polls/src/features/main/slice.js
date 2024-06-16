import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	questions: [],
	loading: false,
};

const mainSlice = createSlice({
	name: 'main',
	initialState,
	reducers: {
		receivedQuestions(state, action) {
			state.questions = action.payload;
		},
		showLoading(state) {
			state.loading = true;
		},
		hideLoading(state) {
			state.loading = false;
		},
	},
});

export const { receivedQuestions, showLoading, hideLoading } =
	mainSlice.actions;
export default mainSlice.reducer;
