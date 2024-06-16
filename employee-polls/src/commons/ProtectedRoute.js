import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

/**
 * @description A component wrap screen that require user must login
 * @param {ReactNode} children
 */
export const ProtectedRoute = ({ children }) => {
	const { isLoggedIn } = useSelector((state) => state.auth);
	console.log(`ProtectedRoute: ${isLoggedIn}`);
	const navigate = useNavigate();
	useEffect(() => {
		if (!isLoggedIn) {
			navigate('/login');
		}
	});
	return isLoggedIn && children;
};
