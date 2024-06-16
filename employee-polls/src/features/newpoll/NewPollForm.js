import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserLogged } from '../main/selectors';
import { createQuestion } from '../main/actions';
import { PrimaryButton } from '../../commons/PrimaryButton';
import { useNavigate } from 'react-router-dom';

export const NewPollForm = () => {
	const userLoggedIn = useSelector(selectUserLogged);
	const navigate = useNavigate();
	const [question, setQuestion] = useState({
		optionOneText: '',
		optionTwoText: '',
	});
	const dispatch = useDispatch();
	const handleChangeOptionOne = (event) => {
		setQuestion({ ...question, optionOneText: event.target.value });
	};
	const handleChangeOptionTwo = (event) => {
		setQuestion({ ...question, optionTwoText: event.target.value });
	};
	const handleCreateQuestion = (event) => {
		event.preventDefault();
		dispatch(createQuestion({ ...question, author: userLoggedIn.id }))
			.unwrap()
			.then(() => {
				navigate('/');
			});
	};

	return (
		<form
			onSubmit={handleCreateQuestion}
			style={{ width: 600 }}
			className='signin-form-container'
		>
			<p>First Option</p>
			<input
				onChange={handleChangeOptionOne}
				value={question.optionOneText}
				className='signin-form-input'
				placeholder='Option One'
			/>
			<p>Second Option</p>
			<input
				onChange={handleChangeOptionTwo}
				value={question.optionTwoText}
				className='signin-form-input'
				placeholder='Option Two'
			/>
			<PrimaryButton title='Submit' />
		</form>
	);
};
