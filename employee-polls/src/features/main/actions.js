import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	_getQuestions,
	getInitialData,
	getQuestions,
	getUsers,
	saveQuestion,
	updateQuestion,
} from '../../utils/api';
import { hideLoading, receivedQuestions, showLoading } from './slice';
import { receivedUsers } from '../login/AuthSlice';

export const handleInitialData = createAsyncThunk(
	'handleInitData',
	async (_, { dispatch }) => {
		dispatch(showLoading());
		const { users, questions } = await getInitialData();
		dispatch(receivedQuestions(questions));
		dispatch(receivedUsers(users));
		dispatch(hideLoading());
	},
);

export const answerQuestion = createAsyncThunk(
	'answerQuestion',
	async ({ authedUser, qid, answer }, { dispatch }) => {
		dispatch(showLoading());
		const [questionUpdated, users] = await updateQuestion({
			authedUser,
			qid,
			answer,
		});
		dispatch(receivedQuestions(questionUpdated));
		dispatch(receivedUsers(users));
		dispatch(hideLoading());
	},
);

export const createQuestion = createAsyncThunk(
	'createQuestion',
	async (question, { dispatch }) => {
		dispatch(showLoading());
		await saveQuestion(question);
		const [questions, users] = await Promise.all([
			getQuestions(),
			getUsers(),
		]);
		dispatch(receivedQuestions(questions));
		dispatch(receivedUsers(users));
		dispatch(hideLoading());
	},
);
