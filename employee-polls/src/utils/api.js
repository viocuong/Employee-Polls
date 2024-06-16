import {
	_getUsers,
	_getQuestions,
	_saveQuestion,
	_saveQuestionAnswer,
	_addUsers,
} from './_DATA.js';

export const getInitialData = async () => {
	return Promise.all([_getUsers(), _getQuestions()]).then(
		([users, questions]) => ({ users, questions }),
	);
};

export const updateQuestion = async ({ authedUser, qid, answer }) => {
	await _saveQuestionAnswer({ authedUser, qid, answer });
	return Promise.all([_getQuestions(), _getUsers()]);
};

export const addUsers = async (user) => {
	await _addUsers(user);
};

export const saveQuestion = async (question) => {
	await _saveQuestion(question);
};

export const getQuestions = async () => {
	return await _getQuestions();
};

export const getUsers = async () => {
	return await _getUsers();
};
