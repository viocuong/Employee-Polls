import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
 * @description A component wrap screen that require user must login
 * @param {ReactNode} children
 */
export const ProtectedRoute = ({ children }) => {
	console.log(`ProtectedRoute`);
	const userLoggedIn = useSelector((state) => state.auth);
	const navigate = useNavigate();
	if (!userLoggedIn) {
		navigate('/login');
	}
	return children;
};
