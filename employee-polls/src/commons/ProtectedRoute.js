import { Navigate, useLocation, useNavigate } from 'react-router-dom';
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
	const location = useLocation();
	return !isLoggedIn ? (
		<Navigate to='/login' replace state={{ path: location.pathname }} />
	) : (
		children
	);
};
