import { useSelector } from 'react-redux';
import { DropdownFilterAnswered } from './DropdownFilterAnswered';
import { ListQuestions } from './ListQuestion';
import './home.css';
import {
	selectAuth,
	selectUnansweredQuestion,
	selectUserLogged,
} from '../main/selectors';

export const HomeScreen = () => {
	const userLoggedIn = useSelector(selectUserLogged);
	const { filterAnswerType } = useSelector((state) => state.home);
	const { unansweredQuestions, answeredQuestions } = useSelector((state) =>
		selectUnansweredQuestion(state, userLoggedIn.id),
	);

	return (
		<div className='home-container'>
			<DropdownFilterAnswered />
			{(filterAnswerType === 'all' ||
				filterAnswerType === 'unanswered') && (
				<ListQuestions
					title='New Questions'
					questions={unansweredQuestions}
				/>
			)}
			{(filterAnswerType === 'all' ||
				filterAnswerType === 'answered') && (
				<ListQuestions title='Done' questions={answeredQuestions} />
			)}
		</div>
	);
};
