import { createSelector } from '@reduxjs/toolkit';

export const selectMain = (state) => state.main;
export const selectAuth = (state) => state.auth;
const selectUsername = (state, username) => username;
const selectQuestionId = (state, questionId) => questionId;
export const selectQuestions = (state) => state.main.questions;
export const selectUserLogged = createSelector([selectAuth], (auth) => {
	return auth.users[auth.userLoggedIn];
});
export const selectUnansweredQuestion = createSelector(
	[selectMain, selectUsername],
	(main, username) => {
		const questionValues = Object.values(main.questions);
		const answeredQuestions = [];
		const unansweredQuestions = [];
		questionValues
			.sort((q1, q2) => q2.timestamp - q1.timestamp)
			.forEach((question) => {
				if (
					!question.optionOne.votes.includes(username) &&
					!question.optionTwo.votes.includes(username)
				) {
					unansweredQuestions.push(question);
				} else {
					answeredQuestions.push(question);
				}
			});
		return {
			answeredQuestions,
			unansweredQuestions,
		};
	},
);

export const selectQuestion = createSelector(
	[selectQuestions, selectQuestionId],
	(questions, questionId) => {
		return questions[questionId];
	},
);
