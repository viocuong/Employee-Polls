import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UserIcon from '../../assets/user-profile.png';
import { useMemo } from 'react';
import { logout } from '../login/AuthSlice';
import { selectUserLogged } from './selectors';

export const MainHeader = () => {
	const userLoggedIn = useSelector(selectUserLogged);
	const navigate = useNavigate();
	if (!userLoggedIn?.name) {
		navigate('/login');
	}
	const dispatch = useDispatch();
	const location = useLocation();

	const [isHomeSelected, isLeaderboardSelected, isNewSelected] =
		useMemo(() => {
			return [
				location.pathname.includes('home'),
				location.pathname.includes('leaderboard'),
				location.pathname.includes('new'),
			];
		}, [location]);

	return (
		<div className='main-header'>
			<div className='main-navigation-bar'>
				<Link
					className={
						!isHomeSelected ? 'text-button-disable' : 'text-button'
					}
					to={'home'}
				>
					Home
				</Link>
				<Link
					className={
						!isLeaderboardSelected
							? 'text-button-disable'
							: 'text-button'
					}
					to={'leaderboard'}
				>
					Leaderboad
				</Link>
				<Link
					className={
						!isNewSelected ? 'text-button-disable' : 'text-button'
					}
					to={'new'}
				>
					New
				</Link>
			</div>
			<div className='user-info-section'>
				<img src={UserIcon} style={{ width: 60, height: 60 }} />
				<p className='main-username'>{userLoggedIn?.name}</p>
				<button
					onClick={() => dispatch(logout())}
					className='text-button'
					style={{ marginLeft: 10 }}
				>
					Logout
				</button>
			</div>
		</div>
	);
};
