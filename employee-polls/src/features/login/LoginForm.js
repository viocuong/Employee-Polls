import { useState } from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../../commons/PrimaryButton';

const initialLoginState = {
	username: '',
	password: '',
};

export const LoginForm = ({ onSignin }) => {
	const [credentials, setCredentials] = useState(initialLoginState);

	const handleChangeUsername = (event) => {
		setCredentials({ ...credentials, username: event.target.value });
	};

	const handleChangePassword = (event) => {
		setCredentials({ ...credentials, password: event.target.value });
	};

	const login = (event) => {
		event.preventDefault();
		onSignin(credentials);
		setCredentials(initialLoginState);
	};

	return (
		<form onSubmit={login} className='signin-form-container'>
			<input
				onChange={handleChangeUsername}
				value={credentials.username}
				className='signin-form-input'
				placeholder='username'
			/>
			<input
				onChange={handleChangePassword}
				type='password'
				value={credentials.password}
				className='signin-form-input'
				placeholder='password'
			/>
			<p className='signup-link'>
				Don't have an account yet?,{' '}
				<Link to={'/signup'}>Sign up now</Link>
			</p>
			<PrimaryButton title='sign in' />
		</form>
	);
};

LoginForm.propTypes = {
	onSignin: PropType.func.isRequired,
};
