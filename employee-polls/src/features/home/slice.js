import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	filterAnswerType: 'unanswered', // Type includes: all | answered | unanswered
};

const homeSlice = createSlice({
	name: 'main',
	initialState,
	reducers: {
		changedFilterType(state, action) {
			state.filterAnswerType = action.payload;
		},
	},
});

export const { changedFilterType } = homeSlice.actions;
export default homeSlice.reducer;
