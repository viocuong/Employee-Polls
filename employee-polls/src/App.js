import React, { useEffect } from 'react';
import './index.css';
import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom';
import { LoginScreen } from './features/login/LoginScreen';
import { ProtectedRoute } from './commons/ProtectedRoute';
import '../src/commons/common.css';
import SignupScreen from './features/signup/SignupScreen';
import { MainScreen } from './features/main/MainScreen';
import { HomeScreen } from './features/home/HomeScreen';
import { LeaderboardScreen } from './features/leaderboard/LeaderboardScreen';
import { NewPollScreen } from './features/newpoll/NewPollScreen';
import { useDispatch, useSelector } from 'react-redux';
import { handleInitialData } from './features/main/actions';
import { DetailQuestionScreen } from './features/detailquestion/DetailQuestionScreen';
import { selectMain } from './features/main/selectors';
import { Loading } from './commons/Loading';
const router = createBrowserRouter([
	{
		path: '/signup',
		element: <SignupScreen />,
	},
	{
		path: '/login',
		element: <LoginScreen />,
	},
	{
		path: '/',
		element: (
			<ProtectedRoute>
				<MainScreen />
			</ProtectedRoute>
		),
		errorElement: <LoginScreen />,
		children: [
			{
				index: true,
				element: <Navigate to='/home' replace />,
			},
			{
				path: 'home',
				element: (
					<ProtectedRoute>
						<HomeScreen />
					</ProtectedRoute>
				),
			},
			{
				path: 'leaderboard',
				element: (
					<ProtectedRoute>
						<LeaderboardScreen />
					</ProtectedRoute>
				),
			},
			{
				path: 'new',
				element: (
					<ProtectedRoute>
						<NewPollScreen />
					</ProtectedRoute>
				),
			},
			{
				path: 'questions/:question_id',
				element: (
					<ProtectedRoute>
						<DetailQuestionScreen />
					</ProtectedRoute>
				),
			},
		],
	},
	// {
	// 	path: '/book-detail/:bookId',
	// 	element: (
	// 		<ProtectedRoute>
	// 			<BookDetailScreen />
	// 		</ProtectedRoute>
	// 	),
	// },
]);

export const App = () => {
	const dispatch = useDispatch();
	const { loading } = useSelector(selectMain);
	useEffect(() => {
		dispatch(handleInitialData());
	}, []);
	return (
		<div>
			<RouterProvider router={router} />
			<Loading loading={loading} />
		</div>
	);
};
