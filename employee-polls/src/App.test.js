import {
	hideLoading,
	receivedQuestions,
	showLoading,
} from './features/main/slice';
import { multiply } from './multiply';
import mainReducer from './features/main/slice';
import homeReducer, { changedFilterType } from './features/home/slice';
import authReducer, { logout } from './features/login/AuthSlice';
import { _saveQuestion, _saveQuestionAnswer } from './utils/_DATA';
import { fireEvent, render } from '@testing-library/react';
import { LoginScreen } from './features/login/LoginScreen';
import { PrimaryButton } from './commons/PrimaryButton';
import { ItemQuestion } from './features/home/ItemQuestion';
describe('multiply', () => {
	it('will return the product of both numbers passed', () => {
		expect(multiply(2, 3)).toEqual(6);
	});
});
describe('Main slice', () => {
	const questionsMock = {
		'8xf0y6ziyjabvozdd253nd': {
			id: '8xf0y6ziyjabvozdd253nd',
			author: 'sarahedo',
			timestamp: 1467166872634,
			optionOne: {
				votes: ['sarahedo'],
				text: 'Build our new application with Javascript',
			},
			optionTwo: {
				votes: [],
				text: 'Build our new application with Typescript',
			},
		},
	};
	const initstateMock = {
		questions: [],
		loading: false,
	};
	it('Should initial state correctly', () => {
		const state = mainReducer(undefined, {});
		expect(state.questions).toHaveLength(0);
		expect(state.loading).toBe(false);
	});
	it('Should update state when receive receivedQuestions action', async () => {
		// Execute
		const newState = mainReducer(
			initstateMock,
			receivedQuestions(questionsMock),
		);

		// Assert
		expect(newState.questions).toStrictEqual(questionsMock);
	});
	it('Should loading state change to true when receive showLoading action', () => {
		const newState = mainReducer(initstateMock, showLoading());
		expect(newState.loading).toBe(true);
	});
	it('Should loading state change to false when receive hideLoading action', () => {
		const newState = mainReducer(initstateMock, hideLoading());
		expect(newState.loading).toBe(false);
	});
});

describe('Home slice', () => {
	const initState = {
		filterAnswerType: 'unanswered',
	};
	it('Should initial filterAnswerType is unanswered', () => {
		const state = homeReducer(undefined, {});
		expect(state.filterAnswerType).toBe('unanswered');
	});
	it('Should change state filter answer type when receive changedFilterType action', () => {
		const newState = homeReducer(initState, changedFilterType('answered'));
		expect(newState.filterAnswerType).toBe('answered');
	});
});

describe('Auth slice', () => {
	const initialState = {
		isLoggedIn: false,
		users: {},
		userLoggedIn: '',
	};
	it('Should isLoggedIn state change to false when receive logout action', async () => {
		const stateLoggedInTrueMock = {
			...initialState,
			isLoggedIn: true,
		};
		const newState = authReducer(stateLoggedInTrueMock, logout());
		expect(newState.isLoggedIn).toBe(false);
	});
});

describe('_saveQuestion', () => {
	it('Should reject when not provide param', async () => {
		const questionParamMock = {};
		try {
			await _saveQuestion(questionParamMock);
			expect(false);
		} catch (e) {
			expect(true);
		}
	});
	it('Should return question formated when param passed correctly', async () => {
		const questionParamMock = {
			author: 'sarahedo',
			optionOneText: 'Build our new application with Javascript',
			optionTwoText: 'Build our new application with Typescript',
		};
		const originSetTimeout = setTimeout;
		setTimeout = (callback, _) => {
			callback();
		};
		const questionFormated = await _saveQuestion(questionParamMock);
		expect(questionFormated.author).toBe(questionParamMock.author);
		expect(questionFormated.optionOne.text).toBe(
			questionParamMock.optionOneText,
		);
		expect(questionFormated.optionTwo.text).toBe(
			questionParamMock.optionTwoText,
		);
		setTimeout = originSetTimeout;
	});
});

describe('_saveQuestionAnswer', () => {
	it('Should reject when param passed incorrect', async () => {
		const paramIncorrect = {};
		try {
			await _saveQuestionAnswer(paramIncorrect);
			expect(false);
		} catch (e) {
			expect(true);
		}
	});
	it('Should return true when param passed correctly', async () => {
		const paramCorrect = {
			authedUser: 'sarahedo',
			qid: 'am8ehyc8byjqgar0jgpub9',
			answer: 'optionOne',
		};
		const originSetTimeout = setTimeout;
		setTimeout = (callback, _) => {
			callback();
		};
		const result = await _saveQuestionAnswer(paramCorrect);
		expect(result).toBe(true);
		setTimeout = originSetTimeout;
	});
});

describe('Login', () => {
	it('Will match snapshot', () => {
		const loginComponent = render(<PrimaryButton />);
		expect(loginComponent).toMatchSnapshot();
	});
});

describe('Item question', () => {
	it('Test fireclick item question', () => {
		let buttonShowClicked = false;
		const itemQuestionComponent = render(
			<ItemQuestion
				description='abc'
				onShow={() => {
					buttonShowClicked = true;
				}}
				title={'Question 1'}
			/>,
		);
		const showQuestionButton = itemQuestionComponent.getByText('Show');
		fireEvent.click(showQuestionButton, () => {});
		expect(buttonShowClicked).toBe(true);
	});
});
