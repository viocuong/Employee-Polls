import { useNavigate } from 'react-router-dom';
import { SignupForm } from './SignupForm';
import { useEffect } from 'react';
import employeePolls from '../../assets/employee-engagement-survey.jpg';
import { useDispatch } from 'react-redux';
import { signup } from '../login/actions';

const SignupScreen = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleSignup = (credentials) => {
		dispatch(signup(credentials))
			.unwrap()
			.then(() => {
				navigate('/login');
			})
			.catch((e) => {
				alert(JSON.stringify(e));
			});
	};

	return (
		<div className='signin-container'>
			<h1 className='login-title'>Employee Polls</h1>
			<img src={employeePolls} className='signin-image' />
			<h1 className='login-title' style={{ marginTop: 10 }}>
				Sign up
			</h1>
			<SignupForm onSignup={handleSignup} />
		</div>
	);
};

export default SignupScreen;
