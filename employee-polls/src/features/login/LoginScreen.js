import { useLocation, useNavigate } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import employeePolls from '../../assets/employee-engagement-survey.jpg';
import './login.css';
import { useDispatch } from 'react-redux';
import { login } from './actions';

export const LoginScreen = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { state } = useLocation();
	const handleLogin = (credentials) => {
		dispatch(login(credentials))
			.unwrap()
			.then(() => {
				navigate(state?.path || '/');
			})
			.catch((e) => {
				alert(
					'Wrong username or password, please perform signup to create the user impersonates',
				);
			});
	};
	return (
		<div className='signin-container'>
			<h1 className='login-title'>Employee Polls</h1>
			<img src={employeePolls} className='signin-image' />
			<h1 className='login-title' style={{ marginTop: 10 }}>
				Login
			</h1>
			<LoginForm onSignin={handleLogin} />
		</div>
	);
};
