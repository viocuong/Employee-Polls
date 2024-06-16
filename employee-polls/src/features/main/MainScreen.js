import { Outlet } from 'react-router-dom';
import './main.css';
import { MainHeader } from './MainHeader';

export const MainScreen = () => {
	return (
		<div className='main-container'>
			<MainHeader />
			<Outlet />
		</div>
	);
};
