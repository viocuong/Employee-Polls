import './detailquestion.css';
import Avatar from '../../assets/avatar.png';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectQuestion, selectUserLogged } from '../main/selectors';
import { ItemOption } from './ItemOption';
import { answerQuestion } from '../main/actions';
import { useMemo } from 'react';
import { NotFoundScreen } from '../notfound/NotFoundScreen';

export const DetailQuestionScreen = () => {
	const dispatch = useDispatch();
	const userLoggedIn = useSelector(selectUserLogged);
	const location = useLocation();
	const { question_id } = useParams();
	const question = useSelector((state) => selectQuestion(state, question_id));
	const answerForThisQuestion = userLoggedIn.answers[question_id];
	const isAnsweredQuestion = answerForThisQuestion ? true : false;
	const handleClickVote = (answer) => {
		dispatch(
			answerQuestion({
				authedUser: userLoggedIn.id,
				qid: question.id,
				answer,
			}),
		);
	};

	const [
		numberOAnswerOptionOne,
		numberOAnswerOptionTwo,
		percentageOftionOne,
		percentageOftionTwo,
	] = useMemo(() => {
		if (!question) return [0, 0, 0, 0];
		const numberOfOne = question.optionOne.votes.length;
		const numberOfTwo = question.optionTwo.votes.length;
		const totalOption = numberOfOne + numberOfTwo;
		const percentageOne = (numberOfOne / totalOption) * 100;
		const percentageTwo = 100 - percentageOne;
		return [numberOfOne, numberOfTwo, percentageOne, percentageTwo];
	}, [question]);
	if (!question) {
		return <NotFoundScreen />;
	}
	return (
		<div className='detail-question-container'>
			<h1 className='detail-question-title'>Poll by {question.author}</h1>
			<img src={Avatar} className='detail-question-avatar' />
			<h1 className='detail-question-title'>Would You Rather</h1>
			<div className='detail-question-options-container'>
				<ItemOption
					voted={answerForThisQuestion === 'optionOne'}
					onVote={() => {
						handleClickVote('optionOne');
					}}
					percentage={percentageOftionOne}
					numberOfPeople={numberOAnswerOptionOne}
					message={question.optionOne.text}
					showDetail={isAnsweredQuestion}
				/>
				<ItemOption
					voted={answerForThisQuestion === 'optionTwo'}
					onVote={() => {
						handleClickVote('optionTwo');
					}}
					percentage={percentageOftionTwo}
					numberOfPeople={numberOAnswerOptionTwo}
					message={question.optionTwo.text}
					showDetail={isAnsweredQuestion}
				/>
			</div>
		</div>
	);
};
